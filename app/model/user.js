'use strict';

module.exports = app => {
  const { INTEGER, STRING } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: { type: STRING, allowNull: false, unique: true },
    password: { type: STRING, allowNull: false },
    nickname: { type: STRING, allowNull: true, defaultValue: null },
    avatar_url: { type: STRING, allowNull: true, defaultValue: null },
    status: { type: INTEGER, allowNull: false, defaultValue: 1 },
  });

  return User;
};
