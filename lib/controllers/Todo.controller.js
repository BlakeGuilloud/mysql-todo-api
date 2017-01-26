'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.postTodo = postTodo;
exports.getTodos = getTodos;
exports.patchTodo = patchTodo;
exports.deleteTodo = deleteTodo;

var _Todo = require('../services/Todo.service');

var todoService = _interopRequireWildcard(_Todo);

var _tael = require('tael');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postTodo(req, res) {
  _promise2.default.resolve().then(function () {
    return todoService.postTodo(req.body);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function getTodos(req, res) {
  return _promise2.default.resolve().then(function () {
    return todoService.getTodos();
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function patchTodo(req, res) {
  _promise2.default.resolve().then(function () {
    return todoService.patchTodo(req.params.id, req.body);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}

function deleteTodo(req, res) {
  _promise2.default.resolve().then(function () {
    return todoService.deleteTodo(req.params.id);
  }).then((0, _tael.SendSuccess)(res)).catch((0, _tael.SendError)(res));
}