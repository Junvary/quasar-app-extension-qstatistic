import QStatistic from './components/QStatistic.vue'


const version = __UI_VERSION__

function install(app) {
  app.component(QStatistic.name, QStatistic)

}

export {
  version,
  QStatistic,

  install
}
