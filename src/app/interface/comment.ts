import {User} from './user';
import {House} from './house';

export interface IComment {
  id: number;
  appUser: User;
  house: House;
  comment: string;
}
