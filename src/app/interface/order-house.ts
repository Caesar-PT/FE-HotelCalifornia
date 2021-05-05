import {House} from './house';
import {User} from './user';

export interface OrderHouse {
  id: number;
  house?: House;
  checkin: Date;
  checkout: Date;
}
