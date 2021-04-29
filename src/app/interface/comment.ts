import {User} from './user';
import {House} from './house';

export interface Comment {
  id?: number;
  user?: User;
  house?: House;
  comment: string;
}
