CREATE TABLE "palettes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"colors" jsonb NOT NULL
);
