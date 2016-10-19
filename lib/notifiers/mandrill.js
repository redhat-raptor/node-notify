/**
 * Module dependencies.
 */
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(global.config.app.notifiers.mandrill.api_key);
var ne = require('../notification-event');
var _ = require('underscore');

function send(msg) {
  var params = _.extend(global.config.app.notifiers.mandrill.message_params, msg);

  mandrill_client.messages.send({
    message: params,
    async: true
  }, function (result) {
    console.log(result);
  }, function (e) {
    console.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
  });
}

function _getParams(msg) {
  var _params = {
    "subject": msg.subject,
    "html": msg.body
  };

  if(msg.to !== undefined && (msg.to + '').length > 0) {
    _params.to = [{
      type: 'to',
      email: msg.to
    }];
  }

  return _params;
}

ne.on('email', function(msg) {
  send(_getParams(msg));
});

ne.on('all', function(msg) {
  send(_getParams(msg));
});
