import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  // Set the URL for the data file to be loaded
  private data = 'assets/data.json';

  // Inject the HttpClient service for making HTTP requests
  constructor(private http: HttpClient) {}

  // Create a method to get all products from the data file
  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.data);
  }

  // Create a method to get a product by ID
  getProductById(id: number): Observable<Product[]> {
    // Use the getProducts() method to load all products
    // Then use the RxJS map() operator to filter the list down to the matching product by ID
    return this.getProducts().pipe(map(list => list.filter(p => p.id == id)))
  }
}
