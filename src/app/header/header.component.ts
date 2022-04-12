import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  display = false;
  constructor(public _Router: Router) {}

  ngOnInit(): void {
    if (this._Router.url == '/product') {
      this.items = [
        {
          label: 'Home',
          url: 'http://localhost:4200/home',
        },
        {
          label: 'Product',
          url: 'http://localhost:4200/Product',
        },
      ];
    } else {
      this.items = [
        {
          label: 'Home',
          url: 'http://localhost:4200/home',
        },
      ];
    }
  }
}
