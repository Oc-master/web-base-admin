'use strict';

module.exports = {
  development: {
    dialect: 'mysql',
    host: '192.168.3.200',
    username: 'root',
    password: '123456',
    database: 'db_base_admin_dev',
  },
  production: {
    dialect: 'mysql',
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
};
