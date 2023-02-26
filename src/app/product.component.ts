import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'app-product',
    template: `
    // Search Criteria:<input type="text" #search (blur)="SearchProducts(search.value)">
    <app-cartDetails></app-cartDetails>
    <table>

    <tr>
    <th>Prouct Id</th>
    <th>Prouct Name</th>
    <th>Prouct Price</th>
    <th>Prouct Image</th>
    <th>Prouct Category</th>
    <th colspan="3">Actions</th>

    </tr>

    <tr *ngFor="let product of products">
    <td>{{product.productid}}</td>
    <td>{{product.productname}}</td>
    <td>{{product.productprice}}</td>
    <!--<td><img src={{product.productimage}}></td>-->
    <td><img [src]="product.productimage"></td>
    <td>{{product.productcategory}}</td>
    <td><button class="btn btn-primary" [disabled]="!IsAdmin">Delete</button></td>
    <td><button *ngIf="IsAdmin" class="btn btn-primary">Edit</button></td>
    <td><app-addToCart [SelectedProduct]="product"></app-addToCart></td>
    </tr>

    </table>
    `
    ,
    
    styles:[
        `
        table,tr,th,td{
            border:1px solid black;
        }
        img{
            width:auto;
            heigth:100px;
        }
        `
    ],
    providers:[CartService]
    


})

export class ProductComponent implements OnInit{
    IsAdmin:boolean = true
    products:Product[]
    constructor(productservice:ProductService) { 
       
        this.products = productservice.getProducts();
    }

    ngOnInit() { }
    SearchProducts(criteria:string){
        alert("Search Product "+ criteria)

    }   
}