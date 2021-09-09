'use strict';

module.exports = () => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  config = exports = {};

  // sequelize config
  config.sequelize = {
    dialect: 'mysql',
    database: 'db_base_admin_dev',
    host: '192.168.3.200',
    username: 'root',
    password: '123456',
    timezone: '+08:00',
    define: {
      paranoid: true, // 不删除数据库条目，记录删除时间 deleteAt
      underscored: true, // 禁用小驼峰命名法，更改为下划线命名法
      createdAt: 'create_time',
      updatedAt: 'update_time',
      deletedAt: 'delete_time',
    },
  };
};
