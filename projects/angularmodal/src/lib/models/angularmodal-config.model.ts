import {AngularmodalOptions} from './angularmodal-options.model';

export class AngularmodalConfig implements AngularmodalOptions {
    public colors: {
        titleBackground: string;
    };

    public constructor( customOptions: AngularmodalOptions = {} ) {
        this.colors = {
            titleBackground: '#aaa69d',
        };

        if ( customOptions.colors !== undefined ) {
            if (customOptions.colors.titleBackground !== undefined) {
                this.colors.titleBackground = customOptions.colors.titleBackground;
            }
        }
    }
}
