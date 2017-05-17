import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-draggable-list',
  template: `
    <app-draggable-item *ngFor="let element of [1,2,3,4,5]; index as i" [appDrag]="{dragData: i}" [id]="i"></app-draggable-item>
  `,
  styles: [
    `
    :host{
      border: 1px solid darkgrey;
    }
    `
  ]
})
export class DraggableListComponent implements OnInit {
  @HostBinding('class.col-md-6') colmd6 = true;
  constructor() { }

  ngOnInit() {
  }

}
