import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    template: `
    <h3>Login Component</h3>
    Enter Username: <input type="text" [(ngModel)]="username">
    <br><br><br>
    Enter Password: <input type="password" [(ngModel)]="password">
    <br><br><br>
    <button (click)="login()">Login</button><br><br>
    values from Date Sourse: <br>

    UserName: {{username}} <br>
    
    Password: {{password}} <br>
    `
})

export class LoginComponent implements OnInit {
    
    username:string = "admin"
    password:string = "admin"
    constructor() { }

    ngOnInit() { }
    login(){
        this.username = "visitor";
    }

}