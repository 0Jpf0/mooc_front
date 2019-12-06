import { extend } from 'vee-validate'
// import { required, email } from 'vee-validate/dist/rules'
import * as rules from 'vee-validate/dist/rules'

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

// with typescript
for (let [rule, validation] of Object.entries(rules)) {
  extend(rule, {
    ...validation
  })
}
