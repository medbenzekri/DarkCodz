import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../models/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  // Create a new user
  async create(userData: Partial<User>): Promise<User> {
    const user = this.userRepository.create(userData);
    return await this.userRepository.save(user);
  }

  // Find user by ID
  async findById(id: number): Promise<User> {
    return await this.userRepository.findOne({ where: { user_id: id } });
  }

  // Topup tokens
  async topup(userId: number, amount: number): Promise<User> {
    const user = await this.findById(userId);
    user.token_balance += amount;
    return await this.userRepository.save(user);
  }
}
