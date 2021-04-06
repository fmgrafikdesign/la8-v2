import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {BilderSinglePage} from "./bilder-single";

//import { BilderSinglePage } from './bilder-single';

@NgModule({
  declarations: [
    BilderSinglePage,
  ],
  imports: [
    IonicPageModule.forChild(BilderSinglePage),
  ],
})
export class BilderSinglePageModule {}
