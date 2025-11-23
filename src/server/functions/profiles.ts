import { createServerFn } from "@tanstack/react-start";
import { db } from "@/server/db";
import { profileTable } from "@/server/db/schema";
import { eq } from "drizzle-orm";
import { createInsertSchema } from "drizzle-zod";
import z from "zod";

export const profileInsertSchema = createInsertSchema(profileTable);

export const profileSchema = createInsertSchema(profileTable)
export type Profile = z.infer<typeof profileSchema>

export const createProfile = createServerFn({
  method: "POST",
})
  .inputValidator(profileSchema)
  .handler(async ({ data }) => {
    const [profile] = await db.insert(profileTable).values({...data}).returning();
    return profile;
  });

export const getProfile = createServerFn({
  method: "GET",
})
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    const profile = await db.query.profileTable.findFirst({
      where: eq(profileTable.id, data.id),
    })
    return profile;
  });
