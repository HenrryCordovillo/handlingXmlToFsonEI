import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SplitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
