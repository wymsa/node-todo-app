import { Request, Response } from 'express';
import { HttpException } from 'src/common/errors/http-exception.error';
import { TodosService } from 'src/services/todos.service';

const todosService = new TodosService();

export class TodosController {
  private readonly todosService: TodosService;

  constructor(private readonly _todosService: TodosService) {
    this.todosService = _todosService;
  }

  create(request: Request<null, null, { id: number; title: string }>, response: Response) {
    const { id, title } = request.body;

    if (!id || !title) throw new HttpException(400, 'Bad request');

    const createdTodo = this.todosService.create({ id: id, title: title });
    response.status(201).json(createdTodo);
  }

  getAll(request: Request, response: Response) {
    const foundTodos = this.todosService.getAll();
    response.status(200).json(foundTodos);
  }

  getOneById(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;

    if (!id) throw new HttpException(400, 'Bad request');

    const foundTodo = this.todosService.getOneById(Number(id));
    response.status(200).json(foundTodo);
  }
}
