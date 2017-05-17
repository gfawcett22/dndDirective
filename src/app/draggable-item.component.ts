import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-draggable-item',
  template: `
    <div appDrag>{{id}}</div>
  `,
  styles: []
})
export class DraggableItemComponent implements OnInit {
  @Input() id: number;
  constructor() { }

  ngOnInit() {
  }

}
