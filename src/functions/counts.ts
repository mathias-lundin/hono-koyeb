import { desc } from 'drizzle-orm';
import { db } from '../db/db';
import { InsertCount, SelectCount, counts } from '../db/schema';

export async function insertCount(data: InsertCount): Promise<void> {
	await db.insert(counts).values(data);
}

export async function getLatestCount(): Promise<SelectCount | undefined> {
	return db
		.select()
		.from(counts)
		.orderBy(desc(counts.createdAt))
		.limit(1)
		.get();
}
