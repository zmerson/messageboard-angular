
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from '../items-list/items-list.component';
import { ItemsService } from '../items-list/shared/items.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardComponent } from 'src/app/components/card/card.component';

@NgModule({
  declarations: [
    ItemsListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [ItemsService],
  exports: [
    ItemsListComponent
  ]
})
export class ItemsModule { }