import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AngularmodalService} from './angularmodal.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'cook-angularmodal',
  templateUrl: './angularmodal.component.html',
  styleUrls: ['./angularmodal.component.scss']
})
export class AngularmodalComponent implements OnInit, OnDestroy {

    @Input() id;
    @Input() size;
    @Input() title;
    // @Input() isActive;
    // @Output() doInactive = new EventEmitter<boolean>();

    isActive = false;

    $options;

    private modalRef: Subscription;

    constructor(
        private modalService: AngularmodalService,
    ) {
    }

    ngOnInit() {

        if (!this.id) {

        }

        this.$options = {
            id: this.id,
            size: this.size || 'medium',
            title: this.title || '',
        }

        this.modalRef = this.modalService.modal$.subscribe(
            (value) => {
                console.log(this.id);
                if (value.field === this.id){
                    this.isActive = value.active;
                }
            }
        );
    }

    ngOnDestroy() {
        this.modalRef.unsubscribe();
    }

    doCloseModal() {
        this.modalService.close(this.id);
    }

}
