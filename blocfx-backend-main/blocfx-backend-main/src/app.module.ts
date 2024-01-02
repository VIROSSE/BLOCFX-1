import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './modules/user/user.module';
import { AuthModule } from './modules/auth/auth.module';
import { dataSourceOptions } from './utils/data-source';
import { HomeController } from './home.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    { ...JwtModule.register({}), global: true },
    TypeOrmModule.forRoot(dataSourceOptions),
    UserModule,
    AuthModule,
  ],
  controllers: [HomeController],
})
export class AppModule {}
