import { Module } from '@nestjs/common';
import { Users2Controller } from './users2.controller';
import { Users2Service } from './users2.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User2 } from './user2.entity';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from 'src/guards/roles.guard';
@Module({
  imports: [
    TypeOrmModule.forFeature([User2]),
  ],
  controllers: [Users2Controller],
  providers: [Users2Service, {
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
  exports: [Users2Service,TypeOrmModule]
})
export class Users2Module {}
