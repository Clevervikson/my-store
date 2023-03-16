import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('assets/data.json');
  }

  public getProductById(id: number): Observable<Product> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find(product => product.id === id))
    );
  }
}
