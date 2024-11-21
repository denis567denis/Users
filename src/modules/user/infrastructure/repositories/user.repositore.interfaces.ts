export interface GetUserByEmail {
  email: string;
}

export interface CreateUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender?: string;
  address?: string;
  city?: string;
  phone?: string;
}

export interface UpdateUser {
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
