import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ProductsModule,UsersModule, MongooseModule.forRoot('mongodb://localhost/authexample'), AuthModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
