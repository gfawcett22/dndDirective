import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

import {DragOptions} from './drag-options';
@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  @HostBinding('draggable') get draggable(){
    return true;
  }

  @HostListener('drag', ['$event']) drag(event: any) {
    console.log('drag');
    console.log(event);
  }

  @HostListener('dragstart', ['$event']) dragstart(event: any) {
    console.log('dragStart');
    console.log(event);
    //this.el.nativeElement.style.border = 'dashed';
    //ev.dataTransfer.setData('text', 1);
    event.effectAllowed = 'move';
  }

  @HostListener('dragend', ['$event']) dragend(event:any) {
    console.log('dragend');
    console.log(event);
  }


  constructor(private el: ElementRef) { }

}
