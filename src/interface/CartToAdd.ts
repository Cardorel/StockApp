import {ProductInterface} from './Stock.ts';

export interface CartToAddInterface extends ProductInterface {
  quantity: number;
}

export interface StoreListProps {
  data: CartToAddInterface[];
}
