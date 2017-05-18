import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-draggable-list',
  template: `
    <app-draggable-item *ngFor="let element of [1,2,3,4,5]; index as i" [appDrag]="{dragData: element}" [id]="element"></app-draggable-item>
  `,
  styles: [
    `
    :host{
      min-height:150px;
    }
    `
  ]
})
export class DraggableListComponent implements OnInit {
  @HostBinding('class') classes = 'col-md-6 panel panel-default';
  constructor() { }

  ngOnInit() {
  }

}
