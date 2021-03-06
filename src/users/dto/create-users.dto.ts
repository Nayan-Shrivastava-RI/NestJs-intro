import { IsEmail, IsString, IsNotEmpty } from "class-validator";


export class CreateUserDto{
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    readonly email : string;

    @IsString()
    @IsNotEmpty()
    readonly password : string;
}