var request = require('request');
var auth = require('../../config/auth-config')

module.exports = function (opts) {
  return function *(next) {
    this.redirect('')
  }
}