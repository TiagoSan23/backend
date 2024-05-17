import { Pool, QueryResult } from "pg";
import { Request, Response } from "express";

const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  user: 'postgres',
  password: '123'
});

export default async function select(_req: Request, res: Response) {
  try {

    const comando_bd = `
      SELECT id, nome, senha FROM clientes;
    `;

    const client = await pool.connect();
    const result: QueryResult = await client.query(comando_bd);
    client.release();
    res.json(result.rows);
  }

  catch (error) {
    console.error("Erro ao buscar a consulta", error);
    res.status(500).json({ message: "Erro ao buscar" });
  }
}
