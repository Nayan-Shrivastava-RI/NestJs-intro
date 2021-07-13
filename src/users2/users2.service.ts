import { Injectable, NotFoundException } from "@nestjs/common";
import { User2 } from "./user2.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class Users2Service{
    constructor(@InjectRepository(User2) private userRepository: Repository<User2>){

    }

    getAll(): Promise<User2[]>{
        return this.userRepository.find(); // SELECT * from User2
    }

    async getOneById(id: number): Promise<User2>{
        try {
            const user = await this.userRepository.findOneOrFail(id); // SELECT * from user WHERE user.id = id;
            return user
        } catch (error) {
            throw new NotFoundException();
        }
    }


    createUser(name: string): Promise<User2>{
        const newUser = this.userRepository.create({name});
        return this.userRepository.save(newUser); // INSERT 
    }

    async updateUser(id: number, name: string): Promise<User2>{
        const user = await this.getOneById(id);
        if(user){
            user.name = name;
            return this.userRepository.save(user);
        }else{
            throw new NotFoundException();
        }
    }

    async deleteUser(id: number): Promise<User2>{
        const user = await this.getOneById(id);
        return  await this.userRepository.remove(user);
    }

    getHello(): string {
        return 'Hello World!';
    }
}
