import { JwtService } from '@nestjs/jwt';
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    if (!request.headers.authorization) {
      throw new UnauthorizedException();
    }

    const [bearer, token] = request.headers.authorization.split(' ');

    if (bearer !== 'Bearer' || !token) {
      throw new UnauthorizedException();
    }

    try {
      const decodedToken = await this.jwtService.verify(token, {
        secret: this.configService.get('JWT_SECRET_KEY'),
      });
      delete decodedToken.iat;
      delete decodedToken.exp;
      request.user = decodedToken;
      return true;
    } catch (err) {
      throw new UnauthorizedException(err.message);
    }
  }
}
