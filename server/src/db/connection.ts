import postgres from 'postgres';
import { env } from '../env.ts';
import { drizzle } from 'drizzle-orm/postgres-js';
import { schema } from './schema/index.ts'

export const sql = postgres(env.DATABASE_URL);
export const db = drizzle(sql, { schema, casing: 'snake_case' });

await sql`SELECT 'DB IS CONNECTED' as message`.then((res) => {
	console.log(res);
});

