// Importing necessary dependencies and models
import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/products';
import { CartItem } from 'src/app/models/confirm';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // Array to hold items in cart
  private items: CartItem[] = [];

  // Object to hold details for confirmation page
  private confDetails: { name: string, amount: number } = { name: '', amount: 0 };

  constructor() {}

  // Getter method to retrieve items in cart
  public getItemsInCart(): CartItem[] {
    return this.items;
  }

  // Method to add an item to cart
  public addItem(product: Product, q: number): void {
    // Find the index of the product in the cart array
    const index = this.items.findIndex(i => i.product.id === product.id);
    // If the product is already in the cart, increase its quantity
    if (index >= 0) {
      this.items[index].q += q;
    // If it's a new product, add it to the cart array
    } else {
      this.items.push({ product, q });
    }
    // Display an alert to notify the user that the item has been added to the cart
    alert('Added');
  }

  // Method to remove an item from the cart
  public removeItem(id: number): void {
    // Filter out the item with the matching ID from the cart array
    this.items = this.items.filter(i => i.product.id !== id);
    // Display an alert to notify the user that the item has been removed from the cart
    alert('Removed!');
  }

  // Method to update the total amount of the items in the cart
  public updateTotal(items: CartItem[]): number {
    // Set the cart array to the updated array
    this.items = items;

    // Calculate the total amount
    let amount = 0;
    for (const item of items) {
      amount += item.product.price * item.q;
    }

    // Return the total amount
    return amount;
  }

  // Setter method to set details for the confirmation page
  public setConfDetails(name: string, amount: number): void {
    this.confDetails = { name, amount };
  }

  // Getter method to retrieve details for the confirmation page
  public getConfDetails(): { name: string, amount: number } {
    return this.confDetails;
  }
}
