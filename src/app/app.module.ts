import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KaijuListComponent } from './kaiju-list/kaiju-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KaijuListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
