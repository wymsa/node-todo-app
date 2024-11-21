import 'dotenv/config';
import express, { NextFunction, Request, Response, Router } from 'express';
import { createTodosRouter } from './factories/todos.factories';
import { HttpException } from './common/errors/http-exception.error';

function errorHandler(error: any, req: Request, res: Response, next: NextFunction) {
  if (error instanceof HttpException) {
    res.status(error.statusCode).json({ error: error.message });
  } else {
    res.status(400).json({ err: error.message });
  }
  console.log(`Error Handling: ${error.message}`);
}

const app = express();
const router = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const todosRouter = createTodosRouter(router);
app.use('/todos', todosRouter);

app.use('/api', router);
app.use(errorHandler);

app.listen('3001', () => {
  console.log('[Application] Server is running at http://localhost:3001');
});
