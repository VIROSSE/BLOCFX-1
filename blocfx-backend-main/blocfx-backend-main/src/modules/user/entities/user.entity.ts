import { Exclude } from 'class-transformer';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Role } from './../../../utils/enums/roles.enum';
@Entity({ name: 'user' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'varchar',
  })
  firstname: string;

  @Column({
    type: 'varchar',
  })
  lastname: string;

  @Column({
    type: 'varchar',
  })
  company: string;

  @Column({
    type: 'varchar',
  })
  phone_number: string;

  @Column({
    type: 'varchar',
  })
  address: string;

  @Column({
    type: 'varchar',
  })
  town: string;

  @Column({
    type: 'varchar',
  })
  region: string;

  @Column({
    type: 'varchar',
  })
  postcode: string;

  @Column({
    type: 'varchar',
  })
  country: string;

  @Column({
    type: 'varchar',
    unique: true,
  })
  email: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  @Exclude({ toPlainOnly: true })
  password!: string;

  @Column({
    type: 'enum',
    enum: Role,
    nullable: false,
    default: Role.NORMAL,
  })
  role: Role;

  @Column({
    type: 'boolean',
    default: true,
  })
  status: boolean;

  @Column({ default: false, type: 'boolean' })
  approved: boolean;

  @Column({
    type: 'timestamp',
    nullable: false,
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
