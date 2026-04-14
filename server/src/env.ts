import { z } from "zod";

const envSchema = z.object({
	SERVER_PORT: z.coerce.number().default(7777),
	DATABASE_URL: z.string(),
});

export const env = envSchema.parse(process.env);
