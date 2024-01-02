import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { AppModule } from './app.module';
import { validationOptions } from './utils/validation-options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe(validationOptions));
  app.setGlobalPrefix('api', {
    exclude: ['/'],
  });
  app.enableCors({ origin: '*' });
  app.enableVersioning({
    type: VersioningType.URI,
  });
  const config: ConfigService = app.get(ConfigService);
  await app.listen(config.get('APP_PORT'));
}
bootstrap();
