import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../service/product.service';

import { Select2OptionData } from 'ng-select2';
import { Customer, Representative } from 'src/app/model/customer';
import { CustomerService } from 'src/app/service/customer.service';
declare var $: any;
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  customers: Customer[] = [];
  products: any[] = [];
  representatives: Representative[] = [];

  statuses: any[] = [];

  loading: boolean = true;

  activityValues: number[] = [0, 100];

  constructor(
    private customerService: CustomerService,
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (res) => {
        console.log(res.data);
        this.products = res.data;
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {},
    });
    this.customerService.getCustomersLarge().then((customers: any) => {
      console.log(customers);

      this.customers = customers;
      this.loading = false;

      this.customers.forEach((customer) => 'aa');
    });
  }
}
