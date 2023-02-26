import { NgModule, Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddToCartComponent } from './addToCart.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartDetialsComponent } from './cartDetails.component';
import { CounterComponent } from './counter.component';
import { GreetComponent } from './greet/greet.component';
import { LoginComponent } from './login.component';
import { MenuComponent } from './menu.component';
import { ParentComponent } from './parent.component';
import { ProductComponent } from './product.component';
import { ProductService } from './product.service';
import { ReactiveComponent } from './reactive.components';
import { SignupFormComponent } from './signupform.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pagenotfound.component';

let routes = [
  {
    path:'',
    component:GreetComponent
  },
  {
    path:'products',
    component:ProductComponent
  },
  {
    path: 'register',
    component: SignupFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    MenuComponent,
    ProductComponent,
    LoginComponent,
    AddToCartComponent,
    CartDetialsComponent,
    ParentComponent,
    CounterComponent,
    SignupFormComponent,
    ReactiveComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
