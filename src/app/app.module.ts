import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { NgxChartsComponent } from './ngx-charts/ngx-charts.component';
@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule, NgxChartsModule ],
  declarations: [ AppComponent, HelloComponent, NgxChartsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
