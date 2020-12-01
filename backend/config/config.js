require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DEV_DB_NAME,
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
