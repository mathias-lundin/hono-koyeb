CREATE TABLE `counts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`count` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
