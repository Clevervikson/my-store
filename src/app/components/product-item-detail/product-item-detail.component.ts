// Importing Angular core modules and services
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

// Importing custom application services and models
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  // Component metadata
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {

  // Component properties
  product: Product = {} as Product;
  qVals: number[] = Array.from({length: 10}, (_, i) => i + 1);
  q: number = 1;

  // Constructor dependencies injection
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  // Lifecycle hook
  ngOnInit(): void {
    // Subscribe to the route params changes
    this.route.params.subscribe(params => {
      // Retrieve the product by ID using the service
      this.productsService.getProductById(params['id']).subscribe(data => {
        this.product = data[0]; // Update the product property with the retrieved data
      });
    });
  }

  // Add the current product and quantity to the cart
  addToCart(): void {
    this.cartService.addItem(this.product, this.q);
  }
}
