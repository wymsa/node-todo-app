import 'dotenv/config';
import { TodosEntity } from 'src/entities/todos.entity';
import { DataSource } from 'typeorm';

export default new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [TodosEntity],
  migrations: ['src/common/typeorm/migrations/*.ts'],
});
