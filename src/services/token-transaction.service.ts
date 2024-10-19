import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TokenTransaction } from '../models/token-transaction.entity';
import { UserService } from '../services/user.service';

@Injectable()
export class TokenTransactionService {
  constructor(
    @InjectRepository(TokenTransaction)
    private transactionRepository: Repository<TokenTransaction>,
    private userService: UserService,
  ) {}

  // Record token transaction
  async create(userId: number, type: 'award' | 'lookup' | 'topup', amount: number): Promise<TokenTransaction> {
    const user = await this.userService.findById(userId);
    const transaction = this.transactionRepository.create({ user, type, amount });
    return await this.transactionRepository.save(transaction);
  }
}
