/**
 * Module dependencies.
 */
var mandrill = require('mandrill-api/mandrill');
var mandrill_client = new mandrill.Mandrill(global.config.app.notifiers.mandrill.api_key);
var ne = require('../notification-event');
var _ = require('underscore');

function send(msg) {
  mandrill_client.messages.send({
    message: _.extend(msg, global.config.app.notifiers.mandrill.message_params),
    async: true
  }, function (result) {
    console.log(result);
  }, function (e) {
    console.error('A mandrill error occurred: ' + e.name + ' - ' + e.message);
  });
}

ne.on('email', function(msg) {
  send({
    "subject": msg.subject,
    "html": msg.body
  });
});

ne.on('all', function(msg) {
  send({
    "subject": msg.subject,
    "html": msg.body
  });
});
