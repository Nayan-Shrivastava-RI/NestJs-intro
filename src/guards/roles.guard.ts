import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { Role } from './role.enum';
import { ROLES_KEY } from './roles.decorator';
import { request } from 'http';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector : Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.get<Role[]>(ROLES_KEY,context.getHandler())
    if(!requiredRoles){
        return true;
    }else{
        const request = context.switchToHttp().getRequest();
        const user = request.body;
        
        return requiredRoles.some((role)=> user.roles.includes(role));
    }

  }
}
