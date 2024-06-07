DO $$ BEGIN
 CREATE TYPE "public"."portfolio_status" AS ENUM('Finished', 'In-progress');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_contributers" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256),
	"link" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_features" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"content" text
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_images" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"path" varchar(256),
	"alt" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_project_contributers" (
	"project_id" integer NOT NULL,
	"contributer_id" integer NOT NULL,
	CONSTRAINT "portfolio_project_contributers_project_id_contributer_id_pk" PRIMARY KEY("project_id","contributer_id")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" varchar(256),
	"thumbnail_path" varchar(256),
	"thumbnail_alt" varchar(256),
	"status" "portfolio_status",
	"description" text,
	"content" text,
	"published" boolean
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "portfolio_resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"project_id" integer NOT NULL,
	"label" varchar(256),
	"link" varchar(256)
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "portfolio_features" ADD CONSTRAINT "portfolio_features_project_id_portfolio_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."portfolio_projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "portfolio_images" ADD CONSTRAINT "portfolio_images_project_id_portfolio_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."portfolio_projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "portfolio_project_contributers" ADD CONSTRAINT "portfolio_project_contributers_project_id_portfolio_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."portfolio_projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "portfolio_project_contributers" ADD CONSTRAINT "portfolio_project_contributers_contributer_id_portfolio_contributers_id_fk" FOREIGN KEY ("contributer_id") REFERENCES "public"."portfolio_contributers"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "portfolio_resources" ADD CONSTRAINT "portfolio_resources_project_id_portfolio_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."portfolio_projects"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
