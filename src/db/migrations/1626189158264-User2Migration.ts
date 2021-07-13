import {MigrationInterface, QueryRunner} from "typeorm";

export class User2Migration1626189158264 implements MigrationInterface {
    name = 'User2Migration1626189158264'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user2" ("id" integer PRIMARY KEY AUTOINCREMENT NOT NULL, "name" varchar NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user2"`);
    }

}
