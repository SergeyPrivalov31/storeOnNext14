ALTER TABLE "user" ADD COLUMN "roles" "roles" DEFAULT 'user';--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN IF EXISTS "user";