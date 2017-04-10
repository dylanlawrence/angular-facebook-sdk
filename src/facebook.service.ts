import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable()
export class FacebookService {

  constructor(
    @Inject(DOCUMENT) private _doc: any,
    @Inject('SDK_PARAMS') private fbParams: FBInitParams
  ) {

   let _t = this;
    window.fbAsyncInit = () => {
       console.log(this);
       FB.init(fbParams);
       _t.init();
    };
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(_doc, 'script', 'facebook-jssdk'));
  }

  init() {
    // emit fb loaded
    console.log(FB);
  }
}
