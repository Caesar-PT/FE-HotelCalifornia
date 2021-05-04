import {House} from './house';
import {User} from './user';

export interface OrderHouse {
  id: number;
  post?: House;
  checkin: Date;
  checkout: Date;
  user?: User;
}
