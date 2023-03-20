// Importing required modules and services
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  // Selector used to select the component
  selector: 'app-product-list',
  // Template URL of the component
  templateUrl: './product-list.component.html',
  // Style URL of the component
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // Initializing the product list array
  products: Product[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // Fetching the products list on component initialization
    this.fetchProducts();
  }

  // Function to fetch the products list from the service
  fetchProducts(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }

}
