import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signup',
    templateUrl: 'signupform.component.html'
})

export class SignupFormComponent implements OnInit {
    
    name:string = "Sachin"
    address:string = "Pune"
    phone:number = 1234567890
    email:string = "sachin@gmail.com"

    constructor() { }

    ngOnInit() { }

    postform(){
        alert("A form is Posted")
    }
}