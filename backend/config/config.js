require('dotenv').config();

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const dbName = process.env.DEV_DB_NAME;

module.exports = {
  development: {
    username: 'root',
    password: 'tomer123',
    database: 'scraping_data_dev',
    host: '127.0.0.1',
    dialect: 'mysql',
    define: {
      underscored: true,
    },
  },
  test: {
    username: 'root',
    password: null,
    database: 'scraping_data_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'scraping_data_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
