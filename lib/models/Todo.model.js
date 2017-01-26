'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _objection = require('objection');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Todo() {
  _objection.Model.apply(this, arguments);
}

_objection.Model.extend(Todo);

Todo.tableName = 'Todos';

Todo.jsonSchema = {
  type: 'object',
  properties: {
    id: { type: 'integer' },
    title: { type: 'string' },
    complete: {
      type: 'boolean',
      default: false
    }
  }
};

exports.default = Todo;