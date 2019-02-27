import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ModalData} from './angularmodal.types';

@Injectable({
  providedIn: 'root'
})
export class AngularmodalService {

  private modal = new BehaviorSubject<ModalData>({
      active: false,
      field: '',
  });
  public modal$ = this.modal.asObservable();

  constructor() {
    console.log('AngularmodalService');
  }

  open($field) {
    console.log('openModal', $field);
    this.modal.next({
        active: true,
        field: $field,
    });
  }

  close($field) {
    console.log('closeModal', $field);
    this.modal.next({
        active: false,
        field: $field,
    });
  }
}
