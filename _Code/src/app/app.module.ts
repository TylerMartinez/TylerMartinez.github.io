import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TyperwriterComponent } from './typerwriter/typerwriter.component';
import { SlidePanelComponent } from './slide-panel/slide-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    TyperwriterComponent,
    SlidePanelComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
