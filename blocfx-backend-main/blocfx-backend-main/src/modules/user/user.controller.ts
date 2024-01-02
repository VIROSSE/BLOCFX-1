import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { UserService } from './user.service';
import { AuthGuard } from '../../guards/auth.guard';
import { Role } from '../../utils/enums/roles.enum';
import { CreateUserDto } from './dto/create-user.dto';
import { RoleGuard } from './../../guards/role.guard';
import { Roles } from '../../decorators/roles.decorator';
import { UserInterceptor } from '../../interceptors/user.interceptor';
import { UsersInterceptor } from '../../interceptors/users.interceptor';

@Controller({ path: 'user', version: '1' })
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseInterceptors(UserInterceptor)
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.userService.create(userDto);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.ADMIN)
  @UseInterceptors(UsersInterceptor)
  @Get()
  get(@Query('page') page = 1, @Query('pageSize') pageSize = 10) {
    const queryParams = { page, pageSize };
    return this.userService.listUsers(queryParams);
  }

  @UseGuards(AuthGuard, RoleGuard)
  @Roles(Role.ADMIN)
  @Delete('')
  delete(@Query('ids') ids: string[]) {
    return this.userService.delete(ids);
  }
}
