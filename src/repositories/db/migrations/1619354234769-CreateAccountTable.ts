import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAccountTable1619354234769 implements MigrationInterface {
    name = 'CreateAccountTable1619354234769'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "account" ("id" varchar(100) PRIMARY KEY NOT NULL, "type" integer NOT NULL, "email" varchar NOT NULL, "firstName" varchar NOT NULL, "lastName" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "account"`);
    }

}
