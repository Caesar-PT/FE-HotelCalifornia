import {House} from './house';

export interface Photo {
  id?: number;
  house?: House;
  src: string;
}
