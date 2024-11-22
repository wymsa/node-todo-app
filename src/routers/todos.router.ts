import { Router } from 'express';
import { TodosController } from 'src/controllers/todos.controller';

export class TodosRouter {
  constructor(private readonly todosController: TodosController, private readonly router: Router) {}

  defineRoutes() {
    this.router.post('/', this.todosController.create.bind(this.todosController));
    this.router.get('/', this.todosController.getAll.bind(this.todosController));
    this.router.get('/:id', this.todosController.getOneById.bind(this.todosController));

    return this.router;
  }
}
