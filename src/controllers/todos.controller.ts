import { Request, Response } from 'express';
import { HttpException } from 'src/common/errors/http-exception.error';
import { TodosService } from 'src/services/todos.service';

export class TodosController {
  private readonly todosService: TodosService;

  constructor(private readonly _todosService: TodosService) {
    this.todosService = _todosService;
  }

  async create(request: Request<null, null, { title: string; isCompeted: boolean }>, response: Response) {
    const { title, isCompeted } = request.body;

    if (!title) throw new HttpException(400, 'Bad request');

    const dto = { title, isCompeted };

    const createdTodo = await this.todosService.create(dto);
    response.status(201).json(createdTodo);
  }

  async getAll(request: Request, response: Response) {
    const foundTodos = await this.todosService.getAll();
    response.status(200).json(foundTodos);
  }

  async getOneById(request: Request<{ id: string }>, response: Response) {
    const { id } = request.params;

    if (!id) throw new HttpException(400, 'Bad request');

    const foundTodo = await this.todosService.getOneById(Number(id));
    response.status(200).json(foundTodo);
  }
}
