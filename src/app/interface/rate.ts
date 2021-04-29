import {User} from './user';
import {House} from './house';

export interface Rate {
  id?: number;
  user?: User;
  house?: House;
  rate: number;
}
