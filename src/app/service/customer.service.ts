import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersMedium() {
    return this.http
      .get<any>('/src/assets/customers-medium.json')
      .toPromise()
      .then((res) => <Customer[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
