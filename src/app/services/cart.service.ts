import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartItem } from 'src/app/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[] = [];
  private confDetails: { name: string, amount: number } = { name: '', amount: 0 };

  constructor() {}

  public getItems(): CartItem[] {
    return this.items;
  }

  public addItem(product: Product, q: number): void {
    const index = this.items.findIndex(i => i.product.id === product.id);
    if (index >= 0) {
      this.items[index].q += q;
    } else {
      this.items.push({ product, q });
    }
    alert('Added to cart!');
  }

  public removeItem(id: number): void {
    this.items = this.items.filter(i => i.product.id !== id);
    alert('Item removed!');
  }

  public updateTotal(items: CartItem[]): number {
    this.items = items;

    let amount = 0;
    for (const item of items) {
      amount += item.product.price * item.q;
    }
    return amount;
  }

  public setConfDetails(name: string, amount: number): void {
    this.confDetails = { name, amount };
  }

  public getConfDetails(): { name: string, amount: number } {
    return this.confDetails;
  }
}
