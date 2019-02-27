import { NgModule } from '@angular/core';
import { AngularmodalComponent } from './angularmodal.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AngularmodalComponent],
  imports: [
      CommonModule,
  ],
  exports: [AngularmodalComponent]
})
export class AngularmodalModule { }
