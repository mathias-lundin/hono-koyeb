import * as schema from "./schema";
import { db } from "./db";

(async () => {
	db.insert(schema.counts)
		.values([
			{
				count: 0,
			},
		])
		.run();

	console.log(`Seeding complete.`);
})();
