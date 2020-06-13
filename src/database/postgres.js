import Sequelize from 'sequelize'
import config from '../config/'

// connect to progres
const postgreAccountDB = new Sequelize(config.databases.postgres.account, {
  dialect: 'postgres',
})

export {
  postgreAccountDB,
}
