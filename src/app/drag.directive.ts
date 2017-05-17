import { DragService } from './services/drag.service';
import { Directive, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

import {DragOptions} from './drag-options';
@Directive({
  selector: '[appDrag]'
})
export class DragDirective {
  private options: DragOptions = {};
  @HostBinding('draggable') get draggable(){
    return true;
  }

  @Input() set appDrag(options: DragOptions){
    if (options) {
      this.options = options;
    }
  }

  @HostListener('drag', ['$event']) drag(event: any) {
    console.log('drag');
    console.log(event);
  }

  @HostListener('dragstart', ['$event']) dragstart(event: any) {
    console.log('dragStart');
    console.log(event);
    if (this.options.dragData) {
      console.log(this.options.dragData);
      event.dataTransfer.setData('text', JSON.stringify(this.options.dragData));
    }
    event.effectAllowed = 'move';
  }

  @HostListener('dragend', ['$event']) dragend(event:any) {
    console.log('dragend');
    console.log(event);
  }


  constructor(private el: ElementRef, private dragService: DragService) { }

}
