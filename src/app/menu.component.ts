import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    template: `
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <ul class="navbar-nav mr-auto">
    <li class="nav-link" *ngFor="let item of menus">
    <a routerLink="{{item | lowercase}}">{{item}}</a>
    </li>
    </ul>
    </nav>

    
    `
})

export class MenuComponent implements OnInit {
    
    menus : string[] = ["Products","Cart Details","Register","Login","Logout"]
    constructor() { }

    ngOnInit() { }
}