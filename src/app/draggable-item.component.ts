import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-draggable-item',
  template: `
    <div appDrag>{{id}}</div>
  `,
  styles: [
    `
    :host{
      border: 1px solid lightgrey;
      display: block;
      font-size: 1.2rem;
    }
    `
  ]
})
export class DraggableItemComponent implements OnInit {
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
