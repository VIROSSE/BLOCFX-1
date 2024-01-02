/* eslint-disable @typescript-eslint/no-unused-vars */
import { JwtService } from '@nestjs/jwt';
import { Injectable, NotFoundException } from '@nestjs/common';

import { SignInDto } from './dto/signin.dto';
import { UserService } from '../user/user.service';
import { isValidPassword } from '../../utils/helpers';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}
  async signIn({ email, password }: SignInDto) {
    const userData = await this.userService.findOne({ email });
    if (userData && isValidPassword(password, userData.password)) {
      const { password, ...result } = userData;
      const token = await this.jwtService.signAsync(result, {
        expiresIn: '30d',
        secret: this.configService.get('JWT_SECRET_KEY'),
      });
      return {
        accessToken: token,
        user: result,
      };
    }

    throw new NotFoundException('Email or password incorrect');
  }
}
