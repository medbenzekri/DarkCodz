import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportService } from '../services/report.service';
import { ReportController } from '../controllers/report.controller';
import { Report } from '../models/report.entity';
import { ContactModule } from '../modules/contact.module';
import { UserModule } from '../modules/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Report]), ContactModule, UserModule],
  providers: [ReportService],
  controllers: [ReportController],
  exports: [ReportService],
})
export class ReportModule {}
