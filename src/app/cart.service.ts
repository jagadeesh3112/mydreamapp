import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({providedIn: 'root'})
export class CartService {

    cartProducts:Product[] = []
    constructor() {}

    addProductToCart(product:Product){
        
        this.cartProducts.push(product)
    }
    getCartProducts():Product[]{
        return this.cartProducts
    }

    
}