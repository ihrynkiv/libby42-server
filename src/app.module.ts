import { Module } from '@nestjs/common';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { UsersModule } from '@src/users/users.module';
import { DatabaseModule } from '@src/database/database.module';
import { DatabaseService } from '@src/database/database.service';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [UsersModule, DatabaseModule, LoggerModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
