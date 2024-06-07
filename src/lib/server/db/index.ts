import {
	POSTGRES_DB,
	POSTGRES_HOST,
	POSTGRES_PASSWORD,
	POSTGRES_PORT,
	POSTGRES_USER
} from '$env/static/private';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';

export const client = new Client({
	host: POSTGRES_HOST,
	port: Number(POSTGRES_PORT),
	user: POSTGRES_USER,
	password: POSTGRES_PASSWORD,
	database: POSTGRES_DB
});

await client.connect();
export const db = drizzle(client);
