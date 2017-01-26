import * as todoService from '../services/Todo.service';
import { SendSuccess, SendError } from 'tael';
import Fluyt from 'fluyt';

export function postTodo(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(todoService.postTodo, 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function getTodos(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(todoService.getTodos))
    .then(() => todoService.getTodos())
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function patchTodo(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(todoService.patchTodo, 'params.id', 'data'))
    .then(SendSuccess(res))
    .catch(SendError(res));
}

export function deleteTodo(req, res) {
  return Promise.resolve(Fluyt.liftRequest(req))
    .then(Fluyt.liftFunction(todoService.deleteTodo, 'params.id'))
    .then(() => todoService.deleteTodo(req.params.id))
    .then(SendSuccess(res))
    .catch(SendError(res));
}
