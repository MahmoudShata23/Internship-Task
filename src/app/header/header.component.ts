import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  public items: MenuItem[] = [];
  display = false;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Home',
        url: 'http://localhost:4200/home',
      },
    ];
  }
}
