import { boot } from 'quasar/wrappers'
// import VuePlugin from 'quasar-ui-qstatistic'
import * as VuePlugin from 'quasar-ui-qstatistic/src/vue-plugin'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
