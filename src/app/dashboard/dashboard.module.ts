import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { StockCardComponent } from './stock-card/stock-card.component';
import { TextoComponent } from './texto/texto.component';



@NgModule({
  declarations: [
    DashboardPageComponent,
    StockCardComponent,
    TextoComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    DashboardPageComponent,
    StockCardComponent,
    
  ] ,
})
export class DashboardModule { }
