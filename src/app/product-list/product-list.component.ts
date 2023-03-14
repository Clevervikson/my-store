import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  title : string = 'List of products';
  product1: string = 'Yam';
  product2: string = 'Table';
  product3: string = 'Tomatoes';
  product4: string = 'Meat';
  product5: string = 'Television'

  constructor() { }

  ngOnInit(): void {
  }

}
