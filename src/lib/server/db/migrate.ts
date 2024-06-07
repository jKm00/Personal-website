import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';

async function main() {
	const pool = new pg.Pool({ connectionString: process.env.POSTGRES_ULR });
	const db = drizzle(pool);

	console.log('[migrate] Running migrations...');

	await migrate(db, { migrationsFolder: './drizzle' });

	console.log('[migrate] All migrations have been ran, exiting...');

	await pool.end();
}

main();
