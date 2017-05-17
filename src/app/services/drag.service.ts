import { Subject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class DragService {
  private zone: string;

  public drop: Subject<any> = new Subject();

  constructor() { }

  startDrag(zone: string) {
    this.zone = zone;
  }

  accepts(zone: string): boolean {
    return true;
    // return this.zone === zone;
  }
}
