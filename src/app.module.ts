import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { configuration } from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/postgres';
import { CryptoModule } from '@test-project/crypto';
import { JwtStrategy } from '@test-project/guards';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfigService } from './config/jwt';

import { UserModule } from './modules/user';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: configuration }),
    TypeOrmModule.forRootAsync({ useClass: PostgresConfigService }),
    JwtModule.registerAsync({ useClass: JwtConfigService }),
    CryptoModule,
    UserModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
