import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerService } from '@src/logger/logger.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

  const port = process.env.PORT ?? 3004;
  const logger = app.get(LoggerService);

  app.useLogger(logger);
  app.enableCors();
  app.setGlobalPrefix('api');

  await app.listen(port);
  logger.debug(`Application is running on port ${port}`);
}
bootstrap();
