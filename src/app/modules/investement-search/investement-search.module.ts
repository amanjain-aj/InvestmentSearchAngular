import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvestementSearchRoutingModule } from './investement-search-routing.module';
import { InvestementSearchComponent } from './investement-search.component';



@NgModule({
  declarations: [
    InvestementSearchComponent,

  ],
  imports: [
    CommonModule,
    InvestementSearchRoutingModule
  ]
})
export class InvestementSearchModule { }
