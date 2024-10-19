import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class TokenTransaction {
  @PrimaryGeneratedColumn()
  transaction_id: number;

  @ManyToOne(() => User, (user) => user.tokenTransactions)
  user: User;

  @Column({ type: 'enum', enum: ['award', 'lookup', 'topup'] })
  type: 'award' | 'lookup' | 'topup';

  @Column({ type: 'int' })
  amount: number;

  @CreateDateColumn()
  created_at: Date;
}
