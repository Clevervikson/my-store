import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  // Input decorator indicates that the product property is passed from the parent component
  @Input() product!: Product;

  // Initializing the quantity values array and quantity to 1
  qVals: number[] = Array.from({ length: 10 }, (_, i) => i + 1);
  q = 1;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  // Method to add the selected item to cart
  addToCart(): void {
    this.cartService.addItem(this.product, this.q);
  }
}
