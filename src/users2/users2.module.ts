import { Module } from '@nestjs/common';
import { Users2Controller } from './users2.controller';
import { Users2Service } from './users2.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User2 } from './user2.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([User2]),
  ],
  controllers: [Users2Controller],
  providers: [Users2Service],
  exports: [Users2Service,TypeOrmModule]
})
export class Users2Module {}
