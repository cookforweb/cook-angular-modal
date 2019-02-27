import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularmodalModule} from '../../projects/angularmodal/src/lib/angularmodal.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmodalModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
