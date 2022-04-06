import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { DetailsComponent } from './product/details/details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';

import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { CheckboxModule } from 'primeng/checkbox';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbPaginationModule,
  NgbAlertModule,
} from '@ng-bootstrap/ng-bootstrap';

import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    DetailsComponent,
    NotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserModule,
    BrowserAnimationsModule,
    DropdownModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    RouterModule,
    CheckboxModule,
    FormsModule,
    MatIconModule,
    BreadcrumbModule,
    SidebarModule,
    ButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
