import { config } from 'dotenv';
import { ConfigService } from '@nestjs/config';
import { DataSource, DataSourceOptions } from 'typeorm';

config();

const configService = new ConfigService();

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: configService.get<string>('POSTGRES_HOST'),
  port: configService.get<number>('POSTGRES_PORT'),
  database: configService.get<string>('POSTGRES_DATABASE'),
  username: configService.get<string>('POSTGRES_USER'),
  password: configService.get<string>('POSTGRES_PASSWORD'),
  entities: ['dist/**/*.entity.{ts,js}'],
  migrations: ['dist/db/migrations/*.{ts,js}'],
  migrationsTableName: 'migrations',
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
