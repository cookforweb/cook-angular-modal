import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core';
import { AngularmodalComponent } from './components/angularmodal.component';
import {CommonModule} from '@angular/common';
import {AngularmodalOptions} from './models/angularmodal-options.model';
import {AngularmodalConfig} from './models/angularmodal-config.model';
import {AngularmodalService} from './services/angularmodal.service';
import {AngularmodalHandlerService} from './services/angularmodal-handler.service';

/**
 * Injection Token for notifier options
 */
export const AngularmodalOptionsToken: InjectionToken<AngularmodalOptions>
    = new InjectionToken<AngularmodalOptions>( '[angularmodal] Angularmodal Options' );

/**
 * Injection Token for notifier configuration
 */
export const AngularmodalConfigToken: InjectionToken<AngularmodalConfig>
    = new InjectionToken<AngularmodalConfig>( '[angularmodal] Angularmodal Config' );

// tslint:enable variable-name

/**
 * Factory for a notifier configuration with custom options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @param   options - Custom notifier options
 * @returns - Notifier configuration as result
 */
export function angularmodalCustomConfigFactory(options: AngularmodalOptions ): AngularmodalConfig {
    return new AngularmodalConfig( options );
}

/**
 * Factory for a notifier configuration with default options
 *
 * Sidenote:
 * Required as Angular AoT compilation cannot handle dynamic functions; see <https://github.com/angular/angular/issues/11262>.
 *
 * @returns - Notifier configuration as result
 */
export function angularmodalDefaultConfigFactory(): AngularmodalConfig {
    return new AngularmodalConfig( {} );
}


@NgModule({
  declarations: [
      AngularmodalComponent],
  imports: [
      CommonModule,

  ],
  exports: [AngularmodalComponent],
    providers: [
        AngularmodalService,
        AngularmodalHandlerService,
        // Provide the default notifier configuration if just the module is imported
        {
            provide: AngularmodalConfigToken,
            useFactory: angularmodalDefaultConfigFactory
        }

    ]
})
export class AngularmodalModule {

    /**
     * Setup the notifier module with custom providers, in this case with a custom configuration based on the givne options
     *
     * @param   [options={}] - Custom notifier options
     * @returns - Notifier module with custom providers
     */
    public static withConfig( options: AngularmodalOptions = {} ): ModuleWithProviders {
        return {
            ngModule: AngularmodalModule,
            providers: [

                // Provide the options itself upfront (as we need to inject them as dependencies -- see below)
                {
                    provide: AngularmodalOptionsToken,
                    useValue: options
                },

                // Provide a custom notifier configuration, based on the given notifier options
                {
                    deps: [
                        AngularmodalOptionsToken
                    ],
                    provide: AngularmodalConfigToken,
                    useFactory: angularmodalCustomConfigFactory
                }

            ]
        };
    }
}
