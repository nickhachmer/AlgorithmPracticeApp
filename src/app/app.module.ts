import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AlgorithmViewComponent } from './algorithm-view/algorithm-view.component';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    TableModule,
    CardModule,
    ButtonModule,
    ChipModule,
    InputTextareaModule,
    InputNumberModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
