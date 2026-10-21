import { Injectable } from '@nestjs/common';
import { Macska } from './macska.interface.js';
import mysql, { RowDataPacket } from 'mysql2/promise';

const mysqlConnection = mysql.createPool({
  host: 'localhost',
  user: '',
  password: 'root',
  database: 'macska_db',
});

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getMacskak() {
    const [rows] = await mysqlConnection.execute(
      `SELECT id, suly, szem_szin AS szemSzin, gazdi_id AS gazdiId, jatek_id AS jatekId FROM macskak`,
    );
    return rows as Macska[];
  }
}