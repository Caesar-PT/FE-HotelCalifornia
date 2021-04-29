import {House} from './house';

export interface OrderHouse {
  id: number;
  post: House;
  startDate: Date;
  endDate: Date;
}
