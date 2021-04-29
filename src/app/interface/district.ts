import {Province} from './province';

export interface District {
  id: number;
  province: Province;
  name: string;
}
