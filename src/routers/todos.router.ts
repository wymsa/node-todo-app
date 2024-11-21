import { Router } from 'express';
import { TodosController } from 'src/controllers/todos.controller';

export class TodosRouter {
  private readonly todosController: TodosController;
  private readonly router: Router;
  constructor(private readonly _todosController: TodosController, private readonly _router: Router) {
    this.todosController = _todosController;
    this.router = _router;
  }

  defineRoutes() {
    this.router.post('/', this.todosController.create.bind(this.todosController));
    this.router.get('/', this.todosController.getAll.bind(this.todosController));
    this.router.get('/:id', this.todosController.getOneById.bind(this.todosController));

    return this.router;
  }
}
