import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './interfaces/jwt-payload.interface';

@Injectable()
export class AuthService {
	constructor(private usersService: UsersService, private jwtService: JwtService){}

	async validateUserByPassword(loginAttempt: LoginUserDto){

		let userToAttempt = await this.usersService.findOneByEmail(loginAttempt.email);

		return new Promise((resolve) => {

			userToAttempt.checkPassword(loginAttempt.password,(err,isMatch) => {
				if(err) throw new UnauthorizedException();

				if(isMatch){
					resolve(this.createJwtpayload(userToAttempt));
				}else{
					throw new UnauthorizedException();
				}
			})
		})
	}

	async validateUserByJwt(payload: JwtPayload){
		let user = this.usersService.findOneByEmail(payload.email);
		if(user){
			return this.createJwtpayload(user);
		}else{
			throw new UnauthorizedException();
		}
	}

	async createJwtpayload(user){
		let data = {
			email: user.email
		}

		let jwt = this.jwtService.sign(data);
		return {
			expiresIn: 3600,
			token: jwt
		}

	}
}
