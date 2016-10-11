'use strict';

/**
 * Module dependencies.
 * @private
 */

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function NotificationEvent() {
  EventEmitter.call(this);
}
util.inherits(NotificationEvent, EventEmitter);

/**
 * Module exports.
 * @public
 */

exports = module.exports = new NotificationEvent();