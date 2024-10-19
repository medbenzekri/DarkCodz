import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from 'typeorm';
import { Report } from './report.entity';
import { LookupHistory } from './lookup-history.entity';

@Entity()
export class Contact {
  @PrimaryGeneratedColumn()
  contact_id: number;

  @Column({ type: 'varchar', length: 20, unique: true })
  phone_number: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  first_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  last_name: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email: string;

  @Column({ type: 'boolean', default: true })
  is_banned: boolean;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => Report, (report) => report.contact)
  reports: Report[];

  @OneToMany(() => LookupHistory, (lookup) => lookup.contact)
  lookups: LookupHistory[];
}
