import { EventHandlerVars } from '@angular/compiler/src/compiler_util/expression_converter';
import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-droppable-list',
  template: `
    <app-draggable-item *ngFor="let dropped of dropList; index as i" [id]="dropList[i]"></app-draggable-item>
  `,
  styles: [
    `
    :host{
      border: 1px solid darkgrey;
      min-height:150px;
    }
    `
  ]
})
export class DroppableListComponent implements OnInit {
  @HostBinding('class.col-md-6') colmd6 = true;

  @HostListener('drop') drop(ev:any){
    ev.preventDefault();
    console.log('drop');
  }
  @HostListener('ondragover') dragOver(ev:any){
    ev.preventDefault();
    ev.dataTransfer.dropEffect = 'move';
    console.log('dragOver');
  }
  public dropList: number[];
  constructor() { }

  ngOnInit() {
  }

}