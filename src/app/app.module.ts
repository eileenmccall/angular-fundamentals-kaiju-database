import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KaijuListComponent } from './kaiju-list/kaiju-list.component';
import { KaijuComponent } from './kaiju/kaiju.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KaijuListComponent,
    KaijuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
