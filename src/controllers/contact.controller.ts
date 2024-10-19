import { Controller, Post, Body, Param, Get } from '@nestjs/common';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.entity';

@Controller('contacts')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async createOrFindContact(@Body() contactData: Partial<Contact>): Promise<Contact> {
    return this.contactService.createOrFind(contactData.phone_number, contactData);
  }

  @Get(':phoneNumber')
  async lookupContact(@Param('phoneNumber') phoneNumber: string): Promise<Contact> {
    return this.contactService.lookup(phoneNumber);
  }
}
