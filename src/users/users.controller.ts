import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-users.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService){}

    @Post()
    async create(@Body() createUserDto : CreateUserDto  ){
        return await this.usersService.create(createUserDto);
    }

    @Get('test')
    @UseGuards(AuthGuard())
    testAuthRoute(){
        return {
            message: "It's a Protected Route"
        }
    }
    
    @Get(':email')
    async getuser( @Param('email') prodEmail: string ){
        return await this.usersService.findOneByEmail(prodEmail);
    }

    

}
