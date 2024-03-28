import { migrate } from "drizzle-orm/bun-sqlite/migrator";

import { drizzle } from "drizzle-orm/bun-sqlite";
import Database from "better-sqlite3";

(async () => {
  const sqlite = new Database("sqlite.db");
  const db = drizzle(sqlite);

  console.log("Starting migrations");

  migrate(db, { migrationsFolder: "drizzle" });

  console.log("Migrations complete.");
})();
