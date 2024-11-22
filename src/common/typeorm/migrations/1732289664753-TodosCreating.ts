import { MigrationInterface, QueryRunner } from "typeorm";

export class TodosCreating1732289664753 implements MigrationInterface {
    name = 'TodosCreating1732289664753'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "todos_entity" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "title" character varying NOT NULL, "isCompeted" character varying NOT NULL, CONSTRAINT "PK_22eaaae895974778a5889730a14" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "todos_entity"`);
    }

}
