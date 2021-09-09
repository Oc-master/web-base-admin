'use strict';

const Controller = require('egg').Controller;

const SUCCESS_RESPONSE = {
  code: 200,
  message: 'Success',
  result: {},
};

const FAIL_RESPONSE = {
  code: 400,
  message: 'Bad request',
  result: null,
};

const NOT_FOUND_RESPONSE = {
  code: '404',
  message: 'Resource not found',
  result: null,
};

class BaseController extends Controller {
  /**
   * 成功响应
   * @param {Object} response - HTTP body
   * @param {number} [response.code = 200] - HTTP code
   * @param {string} [response.message = 'success'] - success message
   * @param {Object} [response.result = {}] - response data
   */
  success(response) {
    this.ctx.status = 200;
    this.ctx.body = Object.assign({}, SUCCESS_RESPONSE, response);
  }

  /**
   * 失败响应
   * @param {Object} response - HTTP body
   * @param {number} [response.code] = 400 - HTTP code
   * @param {string} [response.message] - fail message
   */
  fail(response) {
    const { code = 400 } = response;
    this.ctx.status = code;
    this.ctx.body = Object.assign({}, FAIL_RESPONSE, response);
  }

  /**
   * 未找到资源响应
   * @param {string} message not found message
   */
  notFound(message) {
    this.ctx.status = 404;
    this.ctx.body = Object.assign({}, NOT_FOUND_RESPONSE, { message });
  }
}

module.exports = BaseController;
