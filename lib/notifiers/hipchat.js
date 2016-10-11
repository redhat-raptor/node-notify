var HipChatClient = require('hipchat-client');
var hipchat = new HipChatClient(global.config.app.notifiers.hipchat.api_key);
var ne = require('../notification-event');

function notify(msg) {
  hipchat.api.rooms.message({
    room_id: msg.room || global.config.app.notifiers.hipchat.default_room,
    from: global.config.app.notifiers.hipchat.from,
    message: msg.body,
    notify: msg.notify || true
  }, function (err, res) {
    if (err) {
      console.error(err);
    }
  });
}

ne.on('hipchat', function(msg) {
  notify(msg);
});

ne.on('all', function(msg) {
  notify(msg);
});
