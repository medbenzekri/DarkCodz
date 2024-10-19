import { Controller, Post, Body, Param } from '@nestjs/common';
import { ReportService } from '../services/report.service';

@Controller('reports')
export class ReportController {
  constructor(private readonly reportService: ReportService) {}

  @Post(':userId')
  async createReport(
    @Param('userId') userId: number,
    @Body('phone_number') phoneNumber: string,
    @Body('report_reason') reportReason: string,
  ) {
    return this.reportService.create(userId, phoneNumber, reportReason);
  }
}
