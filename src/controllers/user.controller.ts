import { Controller, Post, Body, Param, Patch } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() userData: Partial<User>): Promise<User> {
    return this.userService.create(userData);
  }

  @Patch(':id/topup')
  async topup(@Param('id') id: number, @Body('amount') amount: number): Promise<User> {
    return this.userService.topup(id, amount);
  }
}
