
import { pgTable } from 'drizzle-orm/pg-core'
import { text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const rooms = pgTable('rooms', {
	id: uuid('id').primaryKey(),
	code: text('').notNull(),
	name: text('').notNull(),
	description: text(''),
	createdAt: timestamp('created_at').defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow(),
})