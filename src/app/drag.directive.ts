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
  }

  @HostListener('dragstart', ['$event']) dragstart(event: any) {
    // console.log('dragStart');
    // console.log(event);
    if (this.options.dragData) {
      // console.log(this.options.dragData);
      event.dataTransfer.setData('dragData', JSON.stringify(this.options.dragData));
    }
  }

  @HostListener('dragend', ['$event']) dragend(event:any) {
    // console.log('dragend');
    // console.log(event);
  }


  constructor(private el: ElementRef, private dragService: DragService) { }

}
