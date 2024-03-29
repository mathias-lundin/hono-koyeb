import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const counts = sqliteTable('counts', {
	id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
	count: integer('count', { mode: 'number' }).notNull(),
	createdAt: text('created_at')
		.default(sql`CURRENT_TIMESTAMP`)
		.notNull(),
});

export type InsertCount = typeof counts.$inferInsert;
export type SelectCount = typeof counts.$inferSelect;
