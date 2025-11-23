import { createServerFn } from "@tanstack/react-start";
import { db } from "@/server/db";
import { results } from "@/server/db/schema";
import { z } from "zod";
import { eq } from "drizzle-orm";

const createResultSchema = z.object({
  profile_id: z.string(),
  answers: z.array(z.object({
    questionId: z.number(),
    answer: z.number(),
  })),
  personality_type: z.string(),
});

export const createResult = createServerFn({
  method: "POST",
})
  .inputValidator(createResultSchema)
  .handler(async ({ data }) => {
    const [result] = await db.insert(results).values({
      profile_id: data.profile_id,
      answers: data.answers,
      personality_type: data.personality_type,
    }).returning();
    return result;
  });

export const getResultByProfileId = createServerFn({
  method: "GET",
})
  .inputValidator(z.object({ profile_id: z.string() }))
  .handler(async ({ data }) => {
    const result = await db.query.results.findFirst({
      where: eq(results.profile_id, data.profile_id),
    });
    return result;
  });

