import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TokenTransactionService } from '../services/token-transaction.service';
import { TokenTransaction } from '../models/token-transaction.entity';
import { UserModule } from '../modules/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([TokenTransaction]), UserModule],
  providers: [TokenTransactionService],
  exports: [TokenTransactionService],
})
export class TokenTransactionModule {}
