import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Report } from './report.entity';
import { TokenTransaction } from './token-transaction.entity';
import { LookupHistory } from './lookup-history.entity';
import { Topup } from './topup.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  user_id: number;

  @Column({ type: 'varchar', length: 255, unique: true })
  username: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 255 })
  password_hash: string;

  @Column({ type: 'int', default: 0 })
  token_balance: number;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Report, (report) => report.user)
  reports: Report[];

  @OneToMany(() => TokenTransaction, (transaction) => transaction.user)
  tokenTransactions: TokenTransaction[];

  @OneToMany(() => LookupHistory, (lookup) => lookup.user)
  lookups: LookupHistory[];

  @OneToMany(() => Topup, (topup) => topup.user)
  topups: Topup[];
}
