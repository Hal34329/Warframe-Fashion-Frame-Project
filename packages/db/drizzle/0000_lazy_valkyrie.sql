CREATE TABLE "warframes" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(50) NOT NULL,
	"is_prime" boolean DEFAULT false NOT NULL,
	"is_gemini" boolean DEFAULT false NOT NULL,
	CONSTRAINT "warframes_name_unique" UNIQUE("name")
);
