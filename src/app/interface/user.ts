import {Role} from './role';

export interface User {
  id: number;
  fullName: string;
  username: string;
  email: string;
  password: string;
  address: string;
  phoneNumber: string;
  role: Role;
}
