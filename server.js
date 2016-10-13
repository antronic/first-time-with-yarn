'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

var server = _http2.default.createServer(app);


app.use(_express2.default.static(_path2.default.join(__dirname, "public")));

app.get('/', function (req, res) {
  res.redirect('/');
});

server.listen(9000 | process.env.PORT, function () {
  console.log("Lisenting on port", server.address().port);
});