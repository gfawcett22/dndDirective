import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDrop]'
})
export class DropDirective {

  @HostListener('dragover', ['$event']) dragOver(event:any){
    console.log('dragOver');
    console.log(event);
    //ev.currentTarget.style.background = 'lightblue';
    event.preventDefault();
  }

  @HostListener('dragenter', ['$event']) dragenter(event:any) {
    console.log('dragenter');
    console.log(event);
  }

  @HostListener('drop', ['$event']) drop(event:any){
    console.log('drop');
    console.log(event);
    event.preventDefault();
    const id = event.dataTransfer.getData('text');
    event.target.appendChild()
  }

  @HostListener('dragexit', ['$event']) dragexit() {

  }
  constructor(private el: ElementRef) { }

}
