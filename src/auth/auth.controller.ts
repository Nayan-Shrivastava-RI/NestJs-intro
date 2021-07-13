import { Controller, Post, Body, UsePipes, ValidationPipe} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto } from '../users/dto/login-user.dto';
@Controller('auth')
export class AuthController {
	
	constructor(private authService: AuthService ){}

	@Post()
	@UsePipes(new ValidationPipe())
	async login(@Body() loginUserDto: LoginUserDto){
		return this.authService.validateUserByPassword(loginUserDto);
	}
}
