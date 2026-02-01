CREATE TABLE "attachments" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(100) NOT NULL,
	"slot" varchar(50) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "palettes" ALTER COLUMN "id" SET DATA TYPE integer;--> statement-breakpoint
ALTER TABLE "warframes" ALTER COLUMN "id" SET DATA TYPE integer;