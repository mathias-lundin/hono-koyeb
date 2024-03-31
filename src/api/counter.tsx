import { Hono } from 'hono';
import { getLatestCount, insertCount } from '../functions/counts';

const updateCount = async (update: 'decrement' | 'increment') => {
	let dbCount = await getLatestCount();
	console.log(`[API ${update}] Reading latest count:${dbCount?.count}`);

	const count =
		update === 'increment'
			? (dbCount?.count ?? 0) + 1
			: (dbCount?.count ?? 0) - 1;

	await insertCount({ count });

	return count;
};

const api = new Hono();

api.post('/increment', async (c) => {
	const count = await updateCount('increment');
	return c.html(count.toString());
});

api.post('/decrement', async (c) => {
	const count = await updateCount('decrement');
	return c.html(count.toString());
});

export default api;
