import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {AngularmodalService} from '../services/angularmodal.service';
import {Subscription} from 'rxjs';
import {AngularmodalConfig} from '../models/angularmodal-config.model';
import {AngularmodalHandlerService} from '../services/angularmodal-handler.service';

@Component({
  selector: 'cook-angularmodal',
  templateUrl: './angularmodal.component.html',
  styleUrls: ['./angularmodal.component.scss']
})
export class AngularmodalComponent implements OnInit, OnDestroy {

    @Input() id;
    @Input() size;
    @Input() title;

    /**
     * Notifier configuration
     */
    public readonly config: AngularmodalConfig;

    isActive = false;

    $options;

    private modalRef: Subscription;

    constructor(
        private modalService: AngularmodalService,
        angularmodalHandlerService: AngularmodalHandlerService
    ) {
        this.config = angularmodalHandlerService.getConfig();
    }

    ngOnInit() {

        if (!this.id) {}

        this.$options = {
            id: this.id,
            size: this.size || 'medium',
            title: this.title || '',
        }

        this.modalRef = this.modalService.modal$.subscribe(
            (value) => {
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
