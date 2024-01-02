import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';

@Controller({ path: 'auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signin')
  signin(@Body() singInDto: SignInDto) {
    return this.authService.signIn(singInDto);
  }
}
