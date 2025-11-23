import { integer, pgTable, text, timestamp, uuid, jsonb } from "drizzle-orm/pg-core";
import { profileTable } from "./profiles";
import { sql } from "drizzle-orm";


export const results = pgTable("results" , {
    id:uuid("id").primaryKey().default(sql`gen_random_uuid()`),
    profile_id:uuid("profile_id").references(() => profileTable.id).notNull(),
    answers: jsonb("answers").$type<Array<{ questionId: number; answer: number }>>().notNull(),
    personality_type:text("personality_type").notNull(),
    createdAt: timestamp("created_at").$defaultFn(() => new Date()).notNull(),
})