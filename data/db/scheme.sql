CREATE SEQUENCE mon_id_seq INCREMENT 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1;

CREATE TABLE "public"."mon" (
    "id" integer DEFAULT nextval('mon_id_seq') NOT NULL,
    "date" timestamp NOT NULL,
    "cpu_percentage" real NOT NULL,
    "mem_used" real NOT NULL,
    "mem_limit" real NOT NULL,
    CONSTRAINT "mon_pkey" PRIMARY KEY ("id")
) WITH (oids = false);