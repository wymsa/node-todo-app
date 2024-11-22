import { MigrationInterface, QueryRunner } from "typeorm";

export class TodosUpdating1732292130997 implements MigrationInterface {
    name = 'TodosUpdating1732292130997'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos_entity" ALTER COLUMN "isCompeted" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "todos_entity" ALTER COLUMN "isCompeted" SET DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos_entity" ALTER COLUMN "isCompeted" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "todos_entity" ALTER COLUMN "isCompeted" SET NOT NULL`);
    }

}
