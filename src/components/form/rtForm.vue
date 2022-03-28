<template>
  <form class="rt-form">
    <slot />
  </form>
</template>

<script>
// import AsyncValidator from 'async-validator'
import objectAssign from '../../utils/merge';

export default {
  name: 'RtForm',
  componentName: 'RtForm', // 通过 $options.componentName 来找 form 组件
  provide() {
    return {
      rtForm: this,
    }
  },
  data() {
    return {
      fields: [], // field: {prop, el}，保存 FormItem 的信息。
      formError: {},
    }
  },
  created() {
    console.log("model",this.model);
    this.$on('form.addField', (field) => {
      if (field) {
        this.fields = [...this.fields, field]
      }
    })
    this.$on('form.removeField', (field) => {
      if (field) {
        this.fields = this.fields.filter(({ prop }) => prop !== field.prop)
      }
    })
  },
  computed: {
    formRules() {
      const descriptor = {}
      this.fields.forEach(({ prop }) => {
        if (!Array.isArray(this.rules[prop])) {
          console.warn(
            `prop 为 ${prop} 的 FormItem 校验规则不存在或者其值不是数组`
          )
          descriptor[prop] = [{ required: true }]
          return
        }
        descriptor[prop] = this.rules[prop]
      })
      return descriptor
    },
    formValues() {
      return this.fields.reduce((data, { prop }) => {
        data[prop] = this.model[prop]
        return data
      }, {})
    },
  },
  props: {
    labelPosition: {
      type: String,
      default: null,
    },
    textAlign: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    clearable: {
      type: Boolean,
      default: null,
    },
    model: Object,
    rules: Object,
  },
  methods: {
    validate(callback) {
      if (!this.model) {
        console.warn(
          '[Element Warn][Form]model is required for validate to work!'
        )
        return
      }

      let promise
      // if no callback, return promise
      if (typeof callback !== 'function' && window.Promise) {
        promise = new window.Promise((resolve, reject) => {
          callback = function (valid) {
            valid ? resolve(valid) : reject(valid)
          }
        })
      }

      let valid = true
      let count = 0
      // 如果需要验证的fields为空，调用验证时立刻返回callback
      if (this.fields.length === 0 && callback) {
        callback(true)
      }
      let invalidFields = {}
      this.fields.forEach((field) => {
        field.validate('', (message, field) => {
          if (message) {
            valid = false
          }
          invalidFields = objectAssign({}, invalidFields, field)
          if (
            typeof callback === 'function' &&
            ++count === this.fields.length
          ) {
            callback(valid, invalidFields)
          }
        })
      })

      if (promise) {
        return promise
      }
    },
    // validate(callback) {
    //   const validator = new AsyncValidator(this.formRules)
    //   validator.validate(this.formValues, (errors) => {
    //     console.log('this.formValues', this.formValues)
    //     console.log('errors', errors)
    //     let formError = {}
    //     if (errors && errors.length) {
    //       errors.forEach(({ message, field }) => {
    //         formError[field] = message
    //       })
    //     } else {
    //       formError = {}
    //     }
    //     this.formError = formError
    //     // 让错误信息的顺序与表单组件的顺序相同
    //     const errInfo = []
    //     this.fields.forEach(({ prop, el }, index) => {
    //       if (formError[prop]) {
    //         errInfo.push(formError[prop])
    //       }
    //     })
    //     callback(errInfo)
    //   })
    // },
    traversal(component) {
      if (typeof component.validator === 'function') {
        this.validPromise.push(component.validator())
      } else {
        if (component.$children.length > 0) {
          component.$children.forEach((item) => {
            this.traversal(item)
          })
        }
      }
    },
  },
}
</script>
