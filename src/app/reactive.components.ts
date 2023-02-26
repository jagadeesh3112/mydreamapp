import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-reactive',
    templateUrl: 'reactive.component.html'
})

export class ReactiveComponent implements OnInit {
    
    signupform:FormGroup
    constructor() { 

        this.signupform = new FormGroup({
            name: new FormControl('Sachin',Validators.required),
            address: new FormControl('Pune',Validators.compose([Validators.required,Validators.minLength(5)])),
            telephone: new FormControl('12345678'),
            email: new FormControl('abc@gmail.com',Validators.email)
        })
    }

    ngOnInit() { } 


}