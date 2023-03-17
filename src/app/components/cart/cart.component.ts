import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: CartItem[] = [];
  totalAmount = 0;
  customerName = '';
  address = '';
  cardNumber = '';

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    if (this.items.length > 0) {
      this.updateTotalAmount();
    }
  }

  updateTotalAmount(): void {
    this.totalAmount = Math.round(this.cartService.updateTotal(this.items) * 100) / 100;
  }

  handleQuantity(item: CartItem): void {
    if (item.q === 0) {
      this.cartService.removeItem(item.product.id);
      this.items = this.cartService.getItems();
      this.updateTotalAmount();
    } else {
      this.updateTotalAmount();
    }
  }

  onSubmit(): void {
    this.cartService.setConfDetails(this.customerName, this.totalAmount);
    this.router.navigateByUrl('/components/confirmation');
  }
}
