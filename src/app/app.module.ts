import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BsDatepickerModule } from 'ngx-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

registerLocaleData(localePt);

@NgModule({
  imports: [ 
    BrowserModule,
    BrowserAnimationsModule, 
    ReactiveFormsModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ]
})
export class AppModule { }
