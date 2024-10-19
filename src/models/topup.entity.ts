import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Topup {
  @PrimaryGeneratedColumn()
  topup_id: number;

  @ManyToOne(() => User, (user) => user.topups)
  user: User;

  @Column({ type: 'int' })
  amount: number;

  @Column({ type: 'varchar', length: 100 })
  topup_method: string;

  @CreateDateColumn()
  created_at: Date;
}
