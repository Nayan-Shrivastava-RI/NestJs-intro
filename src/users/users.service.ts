import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';
import { CreateUserDto } from './dto/create-users.dto';

@Injectable()
export class UsersService{

    constructor(@InjectModel('User') private userModel : Model<User>){ }

    async create(createUserDto : CreateUserDto) : Promise<User>{
        let createdUser = new this.userModel(createUserDto);
        return await createdUser.save();
    }


    async findOneByEmail(email): Promise<User>{
        return await this.userModel.findOne({email: email});
    }


}
