import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LookupHistory } from '../models/lookup-history.entity';
import { ContactService } from '../services/contact.service';
import { UserService } from '../services/user.service';

@Injectable()
export class LookupHistoryService {
  constructor(
    @InjectRepository(LookupHistory)
    private lookupRepository: Repository<LookupHistory>,
    private userService: UserService,
    private contactService: ContactService,
  ) {}

  // Log a contact lookup and deduct tokens
  async logLookup(userId: number, phoneNumber: string, tokensSpent: number): Promise<LookupHistory> {
    const user = await this.userService.findById(userId);
    const contact = await this.contactService.lookup(phoneNumber);

    if (user.token_balance >= tokensSpent) {
      user.token_balance -= tokensSpent;
      const lookup = this.lookupRepository.create({ user, contact, tokens_spent: tokensSpent });
      return await this.lookupRepository.save(lookup);
    }
    throw new Error('Insufficient tokens');
  }
}
