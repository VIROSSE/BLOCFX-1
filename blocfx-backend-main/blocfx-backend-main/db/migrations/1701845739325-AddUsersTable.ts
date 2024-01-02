import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsersTable1701845739325 implements MigrationInterface {
  name = 'AddUsersTable1701845739325';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TYPE "public"."user_role_enum" AS ENUM('admin', 'normal')`,
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstname" character varying NOT NULL, "lastname" character varying NOT NULL, "company" character varying NOT NULL, "phone_number" character varying NOT NULL, "address" character varying NOT NULL, "town" character varying NOT NULL, "region" character varying NOT NULL, "postcode" character varying NOT NULL, "country" character varying NOT NULL, "email" character varying NOT NULL, "password" text NOT NULL, "role" "public"."user_role_enum" NOT NULL DEFAULT 'normal', "status" boolean NOT NULL DEFAULT true, "approved" boolean NOT NULL DEFAULT false, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TYPE "public"."user_role_enum"`);
  }
}
