import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-parent',
    template:
    `
    <app-counter (update)="counterHandler($event)"></app-counter>
    counter value from child is : {{childcounter}}
    `
})

export class ParentComponent implements OnInit {
   
    childcounter:number
    constructor() { }

    ngOnInit() { }

    counterHandler(value:number){
        this.childcounter = value

    }
}