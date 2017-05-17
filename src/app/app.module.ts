import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DropDirective } from './drop.directive';
import { DragDirective } from './drag.directive';
import { DraggableListComponent } from './draggable-list.component';
import { DroppableListComponent } from './droppable-list.component';
import { DraggableItemComponent } from './draggable-item.component';
import { DragService} from './services/drag.service';

@NgModule({
  declarations: [
    AppComponent,
    DropDirective,
    DragDirective,
    DraggableListComponent,
    DroppableListComponent,
    DraggableItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [DragService],
  bootstrap: [AppComponent]
})
export class AppModule { }
