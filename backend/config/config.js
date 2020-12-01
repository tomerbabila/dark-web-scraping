require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    host: 'mysql',
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
