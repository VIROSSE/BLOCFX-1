import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ConflictException, Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { EntityCondition } from './../../utils/types/entity-condition.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async findOne(fields: EntityCondition<User>) {
    return await this.userRepository.findOne({ where: fields });
  }

  async create(userDto: CreateUserDto) {
    const userData = await this.findOne({ email: userDto.email });
    if (!userData) {
      const user = await this.userRepository.create({
        ...userDto,
        createdAt: new Date(),
      });
      return await this.userRepository.save(user);
    }

    throw new ConflictException('User Already exists');
  }

  async listUsers(queryParams: { page: number; pageSize: number }) {
    const { page = 1, pageSize = 10 } = queryParams;
    const skip = (+page - 1) * +pageSize;
    const take = +pageSize;

    const [users, total] = await this.userRepository
      .createQueryBuilder('users')
      .skip(skip)
      .take(take)
      .orderBy('users.createdAt', 'DESC')
      .getManyAndCount();

    return {
      data: users,
      totalCount: total,
      page: +page,
      pageSize: +pageSize,
    };
  }

  async delete(userIds: string[]) {
    await this.userRepository.delete(userIds);
  }
}
