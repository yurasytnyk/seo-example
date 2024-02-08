import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_BASE_URL: z.string().min(1),
  NEXT_PUBLIC_GTM_ID: z.string().min(1),
});

export const ENV = envSchema.parse(process.env);
