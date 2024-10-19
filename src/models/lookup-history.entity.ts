import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { Contact } from './contact.entity';

@Entity()
export class LookupHistory {
  @PrimaryGeneratedColumn()
  lookup_id: number;

  @ManyToOne(() => User, (user) => user.lookups)
  user: User;

  @ManyToOne(() => Contact, (contact) => contact.lookups)
  contact: Contact;

  @Column({ type: 'int' })
  tokens_spent: number;

  @CreateDateColumn()
  created_at: Date;
}
