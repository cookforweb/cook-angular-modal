import { Component } from '@angular/core';
import {AngularmodalService} from '../../projects/angularmodal/src/lib/services/angularmodal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cook-angular-modal';

  constructor(public modalService: AngularmodalService) {}

  openModal($field){
    this.modalService.open($field);
  }
}
