import 'dotenv/config';
import { db } from './db';
import { migrate } from 'drizzle-orm/libsql/migrator';

(async () => {
	console.log('Starting migrations');

	await migrate(db, { migrationsFolder: 'drizzle' });

	console.log('Migrations complete.');
})();
