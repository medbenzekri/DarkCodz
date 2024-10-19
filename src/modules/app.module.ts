import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from '../modules/user.module';
import { ContactModule } from '../modules/contact.module';
import { ReportModule } from '../modules/report.module';
import { TokenTransactionModule } from '../modules/token-transaction.module';
import { LookupHistoryModule } from '../modules/lookup-history.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,

      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UserModule,
    ContactModule,
    ReportModule,
    TokenTransactionModule,
    LookupHistoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
