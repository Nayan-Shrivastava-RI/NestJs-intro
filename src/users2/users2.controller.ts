import { Controller, Post, Body, Get, Param, UseGuards, Delete } from '@nestjs/common';
import { Users2Service } from './users2.service';
import { User2 } from './user2.entity';


@Controller('users2')
export class Users2Controller {

    constructor(private users2Service: Users2Service){}

    @Post('create')
    async createUser(@Body('name') name :string): Promise<User2>{
        const user = await this.users2Service.createUser(name);
        return user
    }

    @Post('update')
    async UpdateObj(
        @Body('id') id: number,
        @Body('name') name: string
    ): Promise<User2>{
        return await this.users2Service.updateUser(id,name);
    }


    @Get(':id')
    async getUser(@Param('id') id : number): Promise<User2>{
        const user = await this.users2Service.getOneById(id);
        return user;
    }

    @Delete('delete')
    async getHello(@Body('id') id: number): Promise<User2>{
        return await this.users2Service.deleteUser(id);
    }
}
