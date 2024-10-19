import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Report } from '../models/report.entity';
import { ContactService } from '../services/contact.service';
import { UserService } from '../services/user.service';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(Report)
    private reportRepository: Repository<Report>,
    private contactService: ContactService,
    private userService: UserService,
  ) {}

  // Create a report
  async create(userId: number, phoneNumber: string, reportReason: string): Promise<Report> {
    const contact = await this.contactService.createOrFind(phoneNumber, { phone_number: phoneNumber });
    const user = await this.userService.findById(userId);
    const report = this.reportRepository.create({ user, contact, report_reason: reportReason });
    
    // Optionally reward tokens for reporting
    user.token_balance += 10; // Assuming 10 tokens reward
    await this.userService.topup(userId, 10);
    
    return await this.reportRepository.save(report);
  }
}
