import { Component, OnInit } from '@angular/core';
import { cartItem } from 'src/app/models/cartItem';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items: cartItem[] = [];
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
    this.totalAmount = Math.round(this.cartService.getTotalAmount(this.items) * 100) / 100;
  }

  handleQuantity(item: cartItem): void {
    if (item.quantity === 0) {
      this.cartService.removeItem(item.product.id);
      this.items = this.cartService.getItems();
      this.updateTotalAmount();
    } else {
      this.updateTotalAmount();
    }
  }

  onSubmit(): void {
    this.cartService.setCustomerDetails(this.customerName, this.totalAmount);
    this.router.navigateByUrl('/components/confirmation');
  }
}
