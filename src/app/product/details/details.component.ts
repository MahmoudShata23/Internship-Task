import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent implements OnInit {
  ngOnInit(): void {}

  settings = {
    columns: {
      id: {
        title: 'ID',
      },
      name: {
        title: 'Full Name',
      },
      username: {
        title: 'User Name',
      },
      email: {
        title: 'Email',
      },
    },
  };
  data = [
    {
      id: 1,
      name: 'test Graham',
      username: 'Bret',
      email: 'test@april.com',
    },
    {
      id: 2,
      name: 'test Howell',
      username: 'test',
      email: 'test@gmail.tv',
    },
    {
      id: 11,
      name: 'testDuBuque',
      username: 'test.Stanton',
      email: 'test@test.biz',
    },
  ];
}
