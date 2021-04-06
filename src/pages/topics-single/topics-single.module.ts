import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {TopicsSinglePage} from './topics-single';

@NgModule({
  declarations: [
    TopicsSinglePage,
  ],
  imports: [
    IonicPageModule.forChild(TopicsSinglePage),
  ],
})
export class TopicsSinglePageModule {}
