import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators'
import { HttpClient } from '@angular/common/http';
import { Product } from 'src/app/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private data = 'assets/data.json';

  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.data);
  }
  getProductById(id: number): Observable<Product[]> {
    return this.getProducts().pipe(map(list => list.filter(p => p.id == id)))
  }
}
