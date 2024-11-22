import { MigrationInterface, QueryRunner } from "typeorm";

export class TodosUpdating1732292169607 implements MigrationInterface {
    name = 'TodosUpdating1732292169607'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos_entity" DROP COLUMN "isCompeted"`);
        await queryRunner.query(`ALTER TABLE "todos_entity" ADD "isCompeted" boolean DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "todos_entity" DROP COLUMN "isCompeted"`);
        await queryRunner.query(`ALTER TABLE "todos_entity" ADD "isCompeted" character varying DEFAULT false`);
    }

}
