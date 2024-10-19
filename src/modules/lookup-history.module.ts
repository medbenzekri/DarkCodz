import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LookupHistoryService } from '../services/lookup-history.service';
import { LookupHistory } from '../models/lookup-history.entity';
import { UserModule } from '../modules/user.module';
import { ContactModule } from '../modules/contact.module';

@Module({
  imports: [TypeOrmModule.forFeature([LookupHistory]), UserModule, ContactModule],
  providers: [LookupHistoryService],
  exports: [LookupHistoryService],
})
export class LookupHistoryModule {}
