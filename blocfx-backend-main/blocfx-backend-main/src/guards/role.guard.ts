import { Reflector } from '@nestjs/core';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { ROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    const { user } = context.switchToHttp().getRequest();
    const requiredRoles = this.reflector.getAllAndOverride<any[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) {
      return true;
    }

    const hasRole = () => requiredRoles.some((role) => user.role === role);

    return user && user.role && hasRole();
  }
}
