export interface GetUserByEmailDomain {
  email: string;
}

export interface CreateUserDomain {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender?: string;
  address?: string;
  city?: string;
  phone?: string;
}

export interface UpdateUserDomain {
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
