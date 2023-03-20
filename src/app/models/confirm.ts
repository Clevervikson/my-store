import { Product } from 'src/app/models/products';

export class CartItem {
  product: Product;
  q: number;

  constructor() {
    // Create a new instance of Product and assign it to the "product" property
    this.product = new Product();

    // Set the "q" property to 1
    this.q = 1;
  }
}
