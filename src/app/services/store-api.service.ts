import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class StoreApiService {
  constructor(private http: HttpClient) {}

  /**
   * https://fakestoreapi.com/
   * https://github.com/keikaavousi/fake-store-api
   */
  getData() {
    return this.http
      .get('https://fakestoreapi.com/products')
      .subscribe((values) => console.log('API values: ', values));
  }
}
