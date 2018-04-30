import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

// Import native audio
import {NativeAudio} from "@ionic-native/native-audio";

/**
 * Generated class for the BilderSinglePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bilder-single',
  templateUrl: 'bilder-single.html',
})
export class BilderSinglePage {

  bild: any;
  file: any;
  play: any;
  pause: any;
  unload: any;
  interviews: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
    console.log(this.navParams.get('bild'));
    this.bild = this.navParams.get('bild');
    this.interviews = this.bild.audio;

    // Load & Play audio file
    this.play = (url) => {
      this.nativeAudio.preloadComplex('interview', url, 1, 1, 0).then(
        (e) => {
          console.log("looks good");
          console.log(e);

          this.nativeAudio.play('interview');


        }, (e) => {
          console.log('something went wrong:');
          console.log(e);
        }
      )
    };

    // Pause audio file
    this.pause = () => {
      this.nativeAudio.stop('interview').then(
        (e) => {
          console.log("stopped playing:");
          console.log(e);

          this.nativeAudio.play('interview');


        }, (e) => {
          console.log('something went wrong:');
          console.log(e);
        }
      )
    };

    this.unload = () => {
      this.nativeAudio.unload('interview');
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilderSinglePage');
  }

}
