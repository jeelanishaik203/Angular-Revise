import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import {likeHandler} from './likehandler';

let jill = new likeHandler(10, true);
jill.likeEvent();
console.log("hi");
console.log("likes count now" + jill.likecount + "----LikeSTate now" +jill.likeState);
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



