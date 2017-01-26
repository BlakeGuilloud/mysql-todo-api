'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodo = exports.deleteTodo = exports.patchTodo = exports.getTodos = exports.postTodo = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var postTodo = exports.postTodo = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(todo) {
    var newTodo;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            newTodo = void 0;
            _context.prev = 1;
            _context.next = 4;
            return _Todo2.default.query().insertWithRelated(todo);

          case 4:
            newTodo = _context.sent;
            _context.next = 10;
            break;

          case 7:
            _context.prev = 7;
            _context.t0 = _context['catch'](1);
            return _context.abrupt('return', _promise2.default.reject(_context.t0));

          case 10:
            return _context.abrupt('return', getTodos());

          case 11:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[1, 7]]);
  }));

  return function postTodo(_x) {
    return _ref.apply(this, arguments);
  };
}();

var getTodos = exports.getTodos = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
    var todos;
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            todos = void 0;
            _context2.prev = 1;
            _context2.next = 4;
            return _Todo2.default.query();

          case 4:
            todos = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2['catch'](1);
            return _context2.abrupt('return', _promise2.default.reject(_context2.t0));

          case 10:
            if (todos) {
              _context2.next = 12;
              break;
            }

            return _context2.abrupt('return', _promise2.default.reject('no todos'));

          case 12:
            return _context2.abrupt('return', _promise2.default.resolve(todos));

          case 13:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, this, [[1, 7]]);
  }));

  return function getTodos() {
    return _ref2.apply(this, arguments);
  };
}();

var patchTodo = exports.patchTodo = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(todoId, todoData) {
    var todo;
    return _regenerator2.default.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return getTodo(todoId);

          case 2:
            todo = _context3.sent;
            _context3.next = 5;
            return todo.$query().update(todoData);

          case 5:
            return _context3.abrupt('return', getTodos());

          case 6:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function patchTodo(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

var deleteTodo = exports.deleteTodo = function () {
  var _ref4 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee4(todoId) {
    var todo;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return getTodo(todoId);

          case 2:
            todo = _context4.sent;
            _context4.next = 5;
            return todo.$query().delete();

          case 5:
            return _context4.abrupt('return', getTodos());

          case 6:
          case 'end':
            return _context4.stop();
        }
      }
    }, _callee4, this);
  }));

  return function deleteTodo(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

var getTodo = exports.getTodo = function () {
  var _ref5 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee5(todoId) {
    var todo;
    return _regenerator2.default.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Todo2.default.query().findById(todoId);

          case 2:
            todo = _context5.sent;
            return _context5.abrupt('return', _promise2.default.resolve(todo));

          case 4:
          case 'end':
            return _context5.stop();
        }
      }
    }, _callee5, this);
  }));

  return function getTodo(_x5) {
    return _ref5.apply(this, arguments);
  };
}();

var _Todo = require('../models/Todo.model');

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }