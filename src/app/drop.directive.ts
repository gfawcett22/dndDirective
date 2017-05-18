import { DragService } from './services/drag.service';
import { Directive, ElementRef, HostListener, HostBinding, Input, Output } from '@angular/core';

import {DropOptions} from './drop-options';
@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  private options: DropOptions = {};

  @Input() set appDrop(options:DropOptions){
    if (options){
      this.options = options;
    }
  }

  @HostListener('dragover', ['$event']) dragOver(event:any){
    // console.log('dragOver');
    // console.log(event);
    // ev.currentTarget.style.background = 'lightblue';
    if (this.options.zone && this.dragService.accepts(this.options.zone)){

    }
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event']) dragenter(event:any) {
    // console.log('dragenter');
    // console.log(event);
  }

  @HostListener('drop', ['$event']) drop(event: any) {
    const id = event.dataTransfer.getData('dragData');
    // console.log(id);
    console.log(event);
    this.dragService.drop.next(id);
  }

  @HostListener('dragexit', ['$event']) dragexit() {

  }
  constructor(private el: ElementRef, private dragService: DragService) { }

}
