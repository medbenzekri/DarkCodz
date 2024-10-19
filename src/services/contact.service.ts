import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from '../models/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}

  // Create or find a contact by phone number
  async createOrFind(phoneNumber: string, contactData: Partial<Contact>): Promise<Contact> {
    let contact = await this.contactRepository.findOne({ where: { phone_number: phoneNumber } });
    if (!contact) {
      contact = this.contactRepository.create(contactData);
      contact.phone_number = phoneNumber;
      return await this.contactRepository.save(contact);
    }
    return contact;
  }

  // Lookup a contact
  async lookup(phoneNumber: string): Promise<Contact> {
    return this.contactRepository.findOne({ where: { phone_number: phoneNumber } });
  }
}
