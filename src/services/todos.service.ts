export class TodosService {
  private todos: any[] = [];

  create(todoDto: any) {
    this.todos.push(todoDto);
    return todoDto;
  }

  getAll() {
    return this.todos;
  }

  getOneById(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }
}
