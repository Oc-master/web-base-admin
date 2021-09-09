'use strict';

const BaseController = require('../base');

class LoginController extends BaseController {
  async login() {
    const { username, password } = this.ctx.request.body;
    const [ res, err ] = await this.ctx.service.login.index.login(username, password);
    if (err) return this.fail(err);
    this.success(res);
  }
}

module.exports = LoginController;
