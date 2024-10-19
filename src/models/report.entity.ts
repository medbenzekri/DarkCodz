import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Contact } from './contact.entity';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  report_id: number;

  @ManyToOne(() => User, (user) => user.reports)
  user: User;

  @ManyToOne(() => Contact, (contact) => contact.reports)
  contact: Contact;

  @Column({ type: 'varchar', length: 500, nullable: true })
  report_reason: string;

  @CreateDateColumn()
  created_at: Date;
}
