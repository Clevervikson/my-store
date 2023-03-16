import { Product } from 'src/app/models/products';

export class CartItem {
  product: Product;
  q: number;

  constructor() {
    this.product = new Product();
    this.q = 1;
  }
}
