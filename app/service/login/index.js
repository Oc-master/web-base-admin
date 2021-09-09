'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
  async login(username, password) {
    if (typeof username !== 'string' || typeof password !== 'string') {
      return [ null, { message: '账号或密码错误' }];
    }
    const user = await this.ctx.model.User.findOne({ where: { username: username.trim() } });
    if (user && user.password === password) {
      const token = this.app.jwt.sign({ uid: user.id }, this.app.config.jwt.secret);
      const response = {
        message: '登录成功',
        result: { token },
      };
      return [ response, null ];
    }
    return [ null, { message: '账号或密码错误' }];
  }
}

module.exports = LoginService;
