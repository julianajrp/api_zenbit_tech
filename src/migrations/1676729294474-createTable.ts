import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1676729294474 implements MigrationInterface {
    name = 'createTable1676729294474'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "email" character varying(100) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "message" character varying(320) NOT NULL, CONSTRAINT "UQ_9a8739d526f854ca36a7dd511fc" UNIQUE ("email"), CONSTRAINT "PK_ba01f0a3e0123651915008bc578" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "message"`);
    }

}
