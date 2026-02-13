CREATE TABLE "helmets" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"warframe_id" integer NOT NULL,
	CONSTRAINT "helmets_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "skins" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"warframe_id" integer NOT NULL,
	CONSTRAINT "skins_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE "syandanas" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "helmets" ADD CONSTRAINT "helmets_warframe_id_warframes_id_fk" FOREIGN KEY ("warframe_id") REFERENCES "public"."warframes"("id") ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE "skins" ADD CONSTRAINT "skins_warframe_id_warframes_id_fk" FOREIGN KEY ("warframe_id") REFERENCES "public"."warframes"("id") ON DELETE cascade ON UPDATE cascade;