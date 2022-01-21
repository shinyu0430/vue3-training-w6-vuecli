import { createApp } from 'vue'

// axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// vee-validate
import {
  Form, Field, ErrorMessage, defineRule, configure
} from 'vee-validate'
import {
  required, email, min, max
} from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import router from './router'
import App from './App.vue'

defineRule('required', required)
defineRule('email', email)
defineRule('min', min)
defineRule('max', max)

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')
createApp(App)
  .component('Form', Form)
  .component('Field', Field)
  .component('ErrorMessage', ErrorMessage)
  .use(VueAxios, axios)
  .use(router)
  .mount('#app')
