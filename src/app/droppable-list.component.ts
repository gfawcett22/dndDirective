import { DragService } from './services/drag.service';
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
      min-height:150px;
    }
    `
  ]
})
export class DroppableListComponent implements OnInit {
  @HostBinding('class') classes = 'col-md-6 panel panel-default';

  public dropList: number[] = [];
  constructor(private dragService: DragService) { }

  ngOnInit() {
    this.dragService.drop.subscribe(val => {
      this.pushDroppedValue(val);
    });
  }

  pushDroppedValue(val: number) {
    this.dropList.push(val);
  }

}
