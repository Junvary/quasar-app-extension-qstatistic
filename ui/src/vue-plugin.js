import QStatistic from './components/QStatistic'

import pkg from '../package.json'
const { version } = pkg

function install(app) {
  app.component(QStatistic.name, QStatistic)

}

export {
  version,
  QStatistic,

  install
}
