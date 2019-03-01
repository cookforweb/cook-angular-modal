import { BrowserModule } from '@angular/platform-browser';
import {InjectionToken, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AngularmodalModule} from '../../projects/angularmodal/src/lib/angularmodal.module';
import {AngularmodalOptions} from '../../projects/angularmodal/src/lib/models/angularmodal-options.model';

const modalOptions: AngularmodalOptions = {
  colors: {
    titleBackground: '#aaa69d',
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularmodalModule.withConfig( modalOptions ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
