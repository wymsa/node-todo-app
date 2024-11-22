import 'reflect-metadata';
import 'dotenv/config';
import express, { Router } from 'express';
import { createTodosRouter } from './factories/todos.factories';
import { createDataSource } from './factories/typeorm.factories';
import { errorHandler } from './common/middlewares/error-handler.middleware';

function main() {
  const app = express();
  const router = Router();

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  const dataSource = createDataSource();
  const todosRouter = createTodosRouter(router);

  app.use('/todos', todosRouter);

  app.use('/api', router);
  app.use(errorHandler);

  dataSource.initialize().then(() => {
    console.log('[Application] Database is initialized');

    app.listen(process.env.APP_PORT, () => {
      console.log('[Application] Server is running at http://localhost:3001');
    });
  });
}

main();
