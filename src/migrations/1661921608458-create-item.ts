import { MigrationInterface, QueryRunner } from 'typeorm'

export class createItem1661921608458 implements MigrationInterface {
  name = 'createItem1661921608458'

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TYPE "public"."item_status_enum" AS ENUM(\'ON_SALE\', \'SOLD_OUT\')',
    )
    await queryRunner.query(
      'CREATE TABLE "item" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "price" integer NOT NULL, "description" character varying NOT NULL, "status" "public"."item_status_enum" NOT NULL DEFAULT \'ON_SALE\', "createdAt" character varying NOT NULL, "updatedAt" character varying NOT NULL, CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))',
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE "item"')
    await queryRunner.query('DROP TYPE "public"."item_status_enum"')
  }
}
