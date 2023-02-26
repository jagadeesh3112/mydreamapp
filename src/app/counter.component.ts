import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-counter',
    template: `

    <button (click)="increment()">Increment</button>
    `
})

export class CounterComponent implements OnInit {
    
    
    counter:number = 0;

    @Output()
    update:EventEmitter<number> = new EventEmitter<number>()
    constructor() { }

    ngOnInit() { }

    increment(){
        this.counter++;
        //raise update event
        this.update.emit(this.counter)

    }
}