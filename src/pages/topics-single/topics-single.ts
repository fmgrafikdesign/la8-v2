import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import native audio
import {NativeAudio} from "@ionic-native/native-audio";

/**
 * Generated class for the TopicsSinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-topics-single',
  templateUrl: 'topics-single.html',
})
export class TopicsSinglePage {

  topics: any;
  play: any;
  pause: any;
  unload: any;
  info: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {

    this.info = this.navParams.get('info');
    this.topics = this.navParams.get('topics');

    // Load & Play audio file
    this.play = (url) => {
      this.nativeAudio.preloadComplex('topic', url, 1, 1, 0).then(
        (e) => {
          console.log("looks good");
          console.log(e);

          this.nativeAudio.play('topic');


        }, (e) => {
          console.log('something went wrong:');
          console.log(e);
        }
      )
    };

    // Pause audio file
    this.pause = () => {
      this.nativeAudio.stop('topic').then(
        (e) => {
          console.log("stopped playing:");
          console.log(e);

          this.nativeAudio.play('topic');


        }, (e) => {
          console.log('something went wrong:');
          console.log(e);
        }
      )
    };

    this.unload = () => {
      this.nativeAudio.unload('topic');
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TopicsSinglePage');
  }

}
