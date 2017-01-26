import express    from 'express';
import bodyParser from 'body-parser';
import { Model }  from 'objection';
import cors       from 'cors';
import path       from 'path';

import todoRouter from './routes/Todo.router';

import knex       from 'knex';
import knexConfig from '../knexfile.js';

const connection = knex(knexConfig);

knex(knexConfig).migrate.latest();

Model.knex(connection);

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/todos', todoRouter);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('app listening on port: ', port);
});
