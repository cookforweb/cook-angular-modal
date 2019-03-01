import {forwardRef, Inject, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ModalData} from '../angularmodal.types';

@Injectable()
export class AngularmodalService {


  private modal = new BehaviorSubject<ModalData>({
      active: false,
      field: '',
  });
  public modal$ = this.modal.asObservable();


  open($field) {
    this.modal.next({
        active: true,
        field: $field,
    });
  }

  close($field) {
    this.modal.next({
        active: false,
        field: $field,
    });
  }
}
