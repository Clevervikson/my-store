import { CartItem } from 'src/app/models/confirm';
import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item: CartItem;
  @Output() qchanged = new EventEmitter();

  constructor() {
    this.item = new CartItem();
  }

  ngOnInit(): void {
    
  }

}
