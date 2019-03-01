import {forwardRef, Inject, Injectable} from '@angular/core';
import {AngularmodalConfigToken} from '../angularmodal.module';
import {AngularmodalConfig} from '../models/angularmodal-config.model';

@Injectable()
export class AngularmodalHandlerService {

    private readonly config: AngularmodalConfig;

    constructor(
        @Inject( forwardRef( () => AngularmodalConfigToken ) ) config: AngularmodalConfig // The forwardRef is (sadly) required here
    ) {
        this.config = config;
    }

    /**
     * Get the notifier configuration
     *
     * @returns Notifier configuration
     */
    public getConfig(): AngularmodalConfig {
        return this.config;
    }

}

