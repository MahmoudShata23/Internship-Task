import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { ProductService, Product } from '../service/product.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [],
})
export class ProductComponent implements OnInit, DoCheck {
  warehouse: Warehouse[] = [];
  type: Arr[] = [];
  warehouseInput: any;
  typeInput: any;
  radioInput: any;
  checkboxInput: Arr[] = [];
  selectedProduct: any;
  types: any[] = [];
  productsList: any[] = [];
  warehouseArr: any[] = [];
  items: any;
  loading = [false, false, false, false];
  Products: Product[] = [];
  input = 'product1';
  cols: any[] = [];
  disableInput = false;
  styleProduct = { display: 'none' };
  totalRecords: number = 0;
  nameProduct: Arr[] = [];
  searchArr: any;
  tableContent: any;
  filteredWarehouse: any;
  filteredType: any;
  buttonDisabled = true;

  // loading: boolean = true;

  form: FormGroup = new FormGroup({
    Warehouse: new FormControl('', Validators.required),
    Type: new FormControl(''),

    Product: new FormControl({ value: '', disabled: this.disableInput }),
    NameProduct: new FormControl({ value: '', disabled: this.disableInput }),
  });
  constructor(
    private primengConfig: PrimeNGConfig,
    private ProductService: ProductService
  ) {
    this.items = [];
    this.warehouse = [{ name: 'Warehouse-1' }, { name: 'Warehouse-2' }];
    this.ProductService.getProducts().subscribe({
      next: (res: any) => {
        this.Products = res.data;

        this.Products.forEach((index) => {
          this.type.push(index.Type);

          this.warehouseArr.push(index.warehouse);
        });
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
  ngDoCheck() {
    if ((this.warehouseInput, this.typeInput)) {
      if (this.radioInput == 'all-product') {
        this.buttonDisabled = false;
      }
    }
  }
  // ngOnChanges(changes: Search[]) {
  //   console.log(changes);
  // }
  ngOnInit(): void {
    // for (const name of this.form) {
    //   console.log(name);
    // }

    this.cols = [
      { field: 'name', header: 'Product' },
      { field: 'price', header: 'Price' },
      { field: 'Type', header: 'Type' },
    ];

    this.totalRecords = this.cols.length;

    this.primengConfig.ripple = true;
  }
  // onSub(data: any) {
  //   console.log(data.value);
  //   console.log(data.valid);
  // }
  // onSubmit(form: any) {
  //   console.log(form.value);
  // }
  onChange(event: any) {
    if (!event.value.name) {
    } else if (event.value.name) {
      this.disableInput = true;
      this.types = [];
      const filtered = this.Products.filter(
        (index) => index.warehouse == event.value.name
      );
      this.filteredWarehouse = filtered;
      filtered.forEach((i) => {
        if (!this.types.includes(i.Type)) {
          this.types.push(i.Type);
        }
      });
    }
  }
  changeType(type: any) {
    if (!type.value) {
    } else if (type.value) {
      this.productsList = [];
      const filtered = this.filteredWarehouse.filter(
        (index: any) => index.Type == type.value
      );

      this.filteredType = filtered;
      filtered.forEach((i: any) => {
        if (!this.productsList.push(i.name)) {
          this.productsList.push(i.name);
        }
      });
    }
  }
  showProduct() {
    if (this.radioInput == 'all-product') {
      this.styleProduct = { display: 'none' };
    } else if (this.radioInput == 'specific-Product') {
      this.styleProduct = { display: 'flex' };
      this.buttonDisabled = true;
    }
  }
  disableButton() {
    if (this.selectedProduct.length == 0) {
      this.buttonDisabled = true;
    } else {
      this.buttonDisabled = false;
    }
  }
  load(index: any) {
    this.loading[index] = true;
    setTimeout(() => (this.loading[index] = false), 1000);

    const all: Search[] = [
      {
        name: this.selectedProduct,
        warehouse: this.warehouseInput,
        Type: this.typeInput,
        check: this.checkboxInput,
        radio: this.radioInput,
      },
    ];
    this.searchArr = all;
    this.getData();
  }
  getData() {
    this.ProductService.getProducts().subscribe({
      next: (res: any) => {
        let warehouse: any, type: any, product: any, radio: any, check: any;
        this.tableContent = res.data;

        this.searchArr.forEach((item: any) => {
          warehouse = item.warehouse.name;
          type = item.Type;
          check = item.check[0];
          radio = item.radio;
          product = [item.name];
        });

        this.tableContent.forEach((index: any) => {
          if (radio == 'all-product') {
            if (index.warehouse == warehouse && index.Type == type) {
              this.tableContent = this.filteredType;
            }
          } else if (radio == 'specific-Product') {
            const filtered = this.filteredType.filter(
              (key: any, index: any) => key.name == product[0][index]
            );
            this.tableContent = filtered;
          }

          if (check == 'zeroBalance') {
          } else if (check == undefined) {
            const filteredPrice = this.filteredType.filter(
              (key: any, index: any) => key.price != 0
            );
            this.tableContent = filteredPrice;
          }
        });
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
}
interface Warehouse {
  name: string;
}
interface Arr {
  name: string;
}
interface Search {
  name: any;
  warehouse: string;
  Type: string;
  check: any;
  radio: any;
}
