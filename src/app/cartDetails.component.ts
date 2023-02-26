import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { CartService } from './cart.service';

@Component({
    selector: 'app-cartDetails',
    template: `

    <h1>My Cart Proucts</h1>
    <table border="3px solid black" align="center">

    <tr>
    <th>Id</th>
    <th>Name</th>
    <th>Price</th>
    <th>Image</th>
    <th>Category</th>
    </tr>

    <tr *ngFor="let product of cartProducts">
    <td>{{product.productid}}</td>
    <td>{{product.productname}}</td>
    <td>{{product.productprice}}</td>
    <td><img [src]="product.productimage"></td>
    <td>{{product.productcategory}}</td>
    </tr>

    </table>
    `
})

export class CartDetialsComponent implements OnInit {
    
    cartProducts: Product[]
    constructor(private cartservice:CartService) { 

        this.cartProducts = cartservice.getCartProducts()
    }

    ngOnInit() { }


}