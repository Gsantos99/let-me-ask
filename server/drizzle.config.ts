import { defineConfig } from 'drizzle-kit';
import {env} from './src/env.ts'

export default defineConfig({
	dialect: 'postgresql',
	casing: 'snake_case',
	schema: './src/schema/**.ts',
	out: './src/migrations',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
})