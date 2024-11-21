import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import {
  CreateUserService,
  DeleteUserByIdService,
  GetUserByEmailService,
  SignInService,
  UpdateUserService,
} from './user.service.interface';
import { BadRequestException } from '@test-project/exceptions';
import { MessageError } from 'src/core/errors/errors-message';
import { UserDomain } from '../domain';
import { CryptoDomain } from '@test-project/crypto';

@Injectable()
export class UserService {
  constructor(
    private readonly userDomain: UserDomain,
    private readonly cryptoDomain: CryptoDomain,
    private readonly jwtService: JwtService,
  ) {}

  public async getUserByEmail({ email }: GetUserByEmailService) {
    const user = await this.userDomain.getUserByEmail({ email });
    if (!user) {
      throw new BadRequestException(MessageError.NoFindUser);
    }
    return user;
  }

  public async singIn({ email, password }: SignInService) {
    const user = await this.userDomain.getUserByEmail({ email });
    const comparePasswordResult = this.cryptoDomain.compare(password, user.password);
    if (!comparePasswordResult) {
      throw new BadRequestException(MessageError.SignInUser);
    }

    const accessToken = await this.jwtService.signAsync(
      { firstName: user.firstName, lastName: user.lastName, email: user.email, id: user.id },
      { expiresIn: process.env.TEST_JWT_LIFE },
    );
    return {
      accessToken,
    };
  }

  public async createUser(userParameters: CreateUserService) {
    userParameters.password = await this.cryptoDomain.hash(userParameters.password);
    const user = await this.userDomain.createUser(userParameters);
    if (!user) {
      throw new BadRequestException(MessageError.DontCreateuser);
    }

    const accessToken = await this.jwtService.signAsync(
      { firstName: user.firstName, lastName: user.lastName, email: user.email, id: user.id },
      { expiresIn: process.env.TEST_JWT_LIFE },
    );
    return {
      user,
      accessToken,
    };
  }

  public async deleteUser({ email }: DeleteUserByIdService) {
    const resultDeleteUser = this.userDomain.deleteUser(email);
    if (!resultDeleteUser) {
      throw new BadRequestException(MessageError.DeleteUser);
    }
    return resultDeleteUser;
  }

  public async updateUser(userParameters: UpdateUserService) {
    const user = await this.userDomain.updateUser(userParameters);

    if (!user) {
      throw new BadRequestException(MessageError.DeleteUser);
    }
    return user;
  }
}
