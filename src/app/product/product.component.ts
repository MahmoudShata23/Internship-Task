import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  countries: any;
  cities: City[] = [];
  value8: any;
  value7: any;
  selectedCity1: any;

  selectedCity2: any;

  constructor() {}

  ngOnInit(): void {
    this.cities = [
      { name: 'ahmed', code: '12' },
      { name: 'ahmed', code: '12' },
    ];
  }
}
interface City {
  name: string;
  code: string;
}
