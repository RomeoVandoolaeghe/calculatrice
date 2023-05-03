import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { SuccesModule } from './succes/succes.module';
import { ErreurModule } from './erreur/erreur.module';

@Module({
  imports: [SuccesModule, ErreurModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
