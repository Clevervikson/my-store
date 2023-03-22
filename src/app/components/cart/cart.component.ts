// Import the required modules and services
import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import { CartItem } from 'src/app/models/confirm';


// Define the component's metadata
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // Define component properties
  items: CartItem[] = []; // The list of items in the cart
  totalAmount = 0; // The total cost of all items in the cart
  customerName = ''; // The name of the customer
  address = ''; // The customer's address
  cardNumber = ''; // The customer's credit card number

  // Inject the cart service and the router service
  constructor(
    private cartService: CartService, 
    private router: Router) { }

  // Called when the component is initialized
  ngOnInit(): void {
    // Get the list of items from the cart service
    this.items = this.cartService.getItemsInCart();

    // If there are any items in the cart, update the total amount
    if (this.items.length > 0) {
      this.updateTotalAmount();
    }
  }

  // Updates the total cost of all items in the cart
  updateTotalAmount(): void {
    this.totalAmount = +(this.cartService.updateTotalAmount(this.items).toFixed(2));

  }

  // Called when the quantity of an item in the cart is changed
  handleQuantity(item: CartItem): void {
    // If the quantity is 0, remove the item from the cart and update the total amount
    if (!item.q) {
      this.cartService.removeItem(item.product.id as number);
      this.items = this.cartService.getItemsInCart();
      this.updateTotalAmount();
    } else {
      // Otherwise, just update the total amount
      this.updateTotalAmount();
    }
  }

  // Called when the form is submitted
  onSubmit(): void {
    // Set the customer name and total amount in the cart service
    this.cartService.setConfDetails(this.customerName, this.totalAmount);

    // Navigate to the confirmation page
    this.router.navigateByUrl('/components/confirmation');
  }
}
