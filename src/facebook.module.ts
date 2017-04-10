import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacebookService } from './facebook.service';
import { ShareDialog } from './share-dialog/share-dialog.component';

@NgModule({
  declarations: [ShareDialog],
  exports: [ShareDialog],
  providers: [FacebookService]
})
export class FacebookModule {
  static withConfig(fbParams: FBInitParams = {}): ModuleWithProviders {
     return {
      ngModule: FacebookModule,
      providers: [
        { provide: 'SDK_PARAMS', useValue: fbParams }
      ]
    }
  }
}