export interface GetUserByEmailService {
  email: string;
}

export interface SignInService {
  email: string;
  password: string;
}

export interface DeleteUserByIdService {
  email: string;
}

export interface CreateUserService {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender?: string;
  address?: string;
  city?: string;
  phone?: string;
}

export interface UpdateUserService {
  userId: number;
  email?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  gender?: string;
  address?: string;
  city?: string;
  phone?: string;
}
