import pg from "pg";
import dotenv from "dotenv";
dotenv.config();

const { Pool } = pg;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test",
  password: "jahon0401",
  port: 5432,
});

export default pool;
