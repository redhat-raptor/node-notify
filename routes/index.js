var express = require('express');
var router = express.Router();
var ne = require('../lib/notification-event');

/* GET home page. */
router.post('/notifications', function(req, res) {
  var via = req.body.via || 'all';
  ne.emit(via, req.body);

  res.json(req.body);
});

module.exports = router;
