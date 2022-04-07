import { Component, OnInit } from '@angular/core';
import { SelectItem, PrimeNGConfig } from 'primeng/api';
import { Customer } from '../model/customer';
import { CustomerService } from '../service/customer.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [],
})
export class ProductComponent implements OnInit {
  warehouse: Warehouse[] = [];
  type: Type[] = [];
  value7: any;
  selectedValue: any;
  selectedValues: string[] = [];
  selectedCities2: any;
  cities: any;
  items: any;
  loading = [false, false, false, false];

  constructor(private primengConfig: PrimeNGConfig) {
    this.items = [];

    this.cities = [
      { name: 'product-1' },
      { name: 'product-2' },
      { name: 'product-3' },
      { name: 'product-4' },
    ];
  }

  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);
  }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.warehouse = [{ name: 'Warehouse-1' }, { name: 'Warehouse-2' }];
    console.log(this.value7);
    if (!this.value7) {
    } else if (this.value7 == 'Warehouse-1') {
      this.type = [{ name: 'Type-A' }, { name: 'Type-B' }];
    } else if (this.value7 == 'Warehouse-2') {
      this.type = [{ name: 'Type-C' }, { name: 'Type-D' }];
    }
  }
}
interface Warehouse {
  name: string;
}
interface Type {
  name: string;
}
