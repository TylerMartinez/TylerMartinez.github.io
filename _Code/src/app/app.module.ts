import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TyperwriterComponent } from './typerwriter/typerwriter.component';

@NgModule({
  declarations: [
    AppComponent,
    TyperwriterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
