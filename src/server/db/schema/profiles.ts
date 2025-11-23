import { sql } from "drizzle-orm";
import { integer, pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const profileTable = pgTable("profiles",{
    id:uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    name:text("name").notNull(),
    college:text("college"),
    degree:text("degree").notNull(),
    age:integer("age"),
    pers:text("pers"),
    createdAt: timestamp("created_at").$defaultFn(() => new Date()).notNull(),
})