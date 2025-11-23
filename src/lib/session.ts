import { createServerFn } from "@tanstack/react-start";
import { getCookie, setCookie, deleteCookie } from "@tanstack/react-start/server";
import { z } from "zod";

const PROFILE_ID_KEY = "_profile-id";
const PERSONALITY_TYPE_KEY = "_personality-type";

// Profile ID functions
export const getProfileIdServerFn = createServerFn().handler(
  async () => getCookie(PROFILE_ID_KEY) || null,
);

export const setProfileIdServerFn = createServerFn({ method: "POST" })
  .inputValidator(z.object({ id: z.string() }))
  .handler(async ({ data }) => {
    setCookie(PROFILE_ID_KEY, data.id);
    return { success: true };
  });

export const clearProfileIdServerFn = createServerFn({ method: "POST" }).handler(
  async () => {
    deleteCookie(PROFILE_ID_KEY);
    return { success: true };
  },
);

// Personality type functions
export const getPersonalityTypeServerFn = createServerFn().handler(
  async () => getCookie(PERSONALITY_TYPE_KEY) || null,
);

export const setPersonalityTypeServerFn = createServerFn({ method: "POST" })
  .inputValidator(z.object({ type: z.string() }))
  .handler(async ({ data }) => {
    setCookie(PERSONALITY_TYPE_KEY, data.type);
    return { success: true };
  });

export const clearPersonalityTypeServerFn = createServerFn({ method: "POST" }).handler(
  async () => {
    deleteCookie(PERSONALITY_TYPE_KEY);
    return { success: true };
  },
);

// Clear all session data
export const clearSessionServerFn = createServerFn({ method: "POST" }).handler(
  async () => {
    deleteCookie(PROFILE_ID_KEY);
    deleteCookie(PERSONALITY_TYPE_KEY);
    return { success: true };
  },
);

