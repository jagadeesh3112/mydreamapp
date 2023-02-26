import { Component, Input, OnInit } from '@angular/core';
import { Product } from './product';
import { CartService } from './cart.service';

@Component({
    selector: 'app-addToCart',
    template: `
    <button (click) = "AddToCart()">AddToCart</button>
    `
})

export class AddToCartComponent implements OnInit {
    
    @Input()
    SelectedProduct:Product
    constructor(private cartservice:CartService) { }

    ngOnInit() { }

    AddToCart(){
        //alert("Product added into cart is "+this.SelectedProduct.productname+"with price"+this.SelectedProduct.productprice)
        this.cartservice.addProductToCart(this.SelectedProduct)

    }   
}   