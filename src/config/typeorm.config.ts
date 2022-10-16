import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '101',
  database: 'taskmanagement',
  // entities: [__dirname + '/../**/*.entity.ts'],
  autoLoadEntities: true,
  synchronize: true,
};
