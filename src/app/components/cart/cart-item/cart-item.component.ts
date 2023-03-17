import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() item!: CartItem;
  @Output() qchanged = new EventEmitter<CartItem>();

  constructor() {}

  ngOnInit(): void {
    this.item = new CartItem();
  }

}
