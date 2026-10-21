import { Injectable } from '@nestjs/common';
import { createPool } from 'mysql2/promise';
import type { Macska } from './macska.interface.js';

const mysqlConnection = createPool({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '',
  database: 'macska_db',
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getMacskak(): Promise<Macska[]> {
    const [rows] = await mysqlConnection.execute(
      'SELECT id, suly, szem_szin, gazdi_id, jatek_id FROM macskak',
    );

    return rows as Macska[];
  }
}