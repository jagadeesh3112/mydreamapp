import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable()
export class ProductService {
    products:Product[]
    
    constructor() { 

        this.products= new Array<Product>()
        this.products.push(new Product(2,'One Plus t','./assets/list2.jpg',12890,'mobile'))
        this.products.push(new Product(3,'Nokia 6','./assets/list2.jpg',14999,'mobile'))
        this.products.push(new Product(4,'Samsung 8','./assets/list2.jpg',67900,'mobile'))
        this.products.push(new Product(5,'Apple Iphone 8','./assets/list2.jpg',64000,'mobile'))
    }

    getProducts():Product[]{
        return this.products;
    }
    
}