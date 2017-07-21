import { Directive, ElementRef } from '@angular/core';
    
@Directive({ 
     selector: '[myColor]' 
})
export class MyColorDirective {
    constructor(elRef: ElementRef) {
       elRef.nativeElement.style.color = 'red';
    }
     
} 