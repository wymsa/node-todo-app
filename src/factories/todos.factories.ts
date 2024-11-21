import { Router } from 'express';
import { TodosController } from 'src/controllers/todos.controller';
import { TodosRouter } from 'src/routers/todos.router';
import { TodosService } from 'src/services/todos.service';

let todosServiceInstance: TodosService | null = null;

export function createTodosService() {
  if (!todosServiceInstance) return new TodosService();
  return todosServiceInstance;
}

export function createTodosController() {
  const todosService = createTodosService();
  return new TodosController(todosService);
}

export function createTodosRouter(router: Router) {
  const todosController = createTodosController();
  const todosRouter = new TodosRouter(todosController, router);
  return todosRouter.defineRoutes();
}
