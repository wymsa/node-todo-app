import { TodosEntity } from 'src/entities/todos.entity';
import { Repository } from 'typeorm';

export class TodosService {
  constructor(private readonly todosRepository: Repository<TodosEntity>) {}

  async create(todoDto: any) {
    const newTodo = this.todosRepository.create(todoDto);
    console.log(newTodo);
    return await this.todosRepository.save(newTodo);
  }

  async getAll() {
    return await this.todosRepository.find();
  }

  async getOneById(id: number) {
    return await this.todosRepository.findOne({ where: { id } });
  }
}
