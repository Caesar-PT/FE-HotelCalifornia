import {User} from './user';
import {House} from './house';

export interface Rate {
  id: number;
  appUser: User;
  house: House;
  star: number;
}
