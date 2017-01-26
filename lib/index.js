'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _objection = require('objection');

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _Todo = require('./routes/Todo.router');

var _Todo2 = _interopRequireDefault(_Todo);

var _knex = require('knex');

var _knex2 = _interopRequireDefault(_knex);

var _knexfile = require('../knexfile.js');

var _knexfile2 = _interopRequireDefault(_knexfile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var connection = (0, _knex2.default)(_knexfile2.default);

(0, _knex2.default)(_knexfile2.default).migrate.latest();

_objection.Model.knex(connection);

var app = (0, _express2.default)();

app.set('appPath', _path2.default.join('', 'client'));
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(app.get('appPath') + '/build'));

app.use('/api/todos', _Todo2.default);

var port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('app listening on port: ', port);
});