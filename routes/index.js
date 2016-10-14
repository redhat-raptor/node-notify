var express = require('express');
var router = express.Router();
var ne = require('../lib/notification-event');

/* GET home page. */
router.post('/notifications', function(req, res) {
  if(!req.body.via) {
    res.status(400).send('Bad request');
    return;
  }

  ne.emit(req.body.via, req.body);
  res.json(req.body);
});

module.exports = router;
