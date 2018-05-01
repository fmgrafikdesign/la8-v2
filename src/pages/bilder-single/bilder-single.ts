import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

// Import native audio
import {NativeAudio} from "@ionic-native/native-audio";

// Import media
import { Media, MediaObject } from "@ionic-native/media";

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
  stop: any;
  unload: any;
  interviews: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio, private media: Media) {
    console.log(this.navParams.get('bild'));
    this.bild = this.navParams.get('bild');
    this.interviews = this.bild.audio;



    this.play = (url) => {
      this.file = this.media.create(url);

      this.file.onSuccess.subscribe( () => {
        console.log('successful');
        this.file.play();
      });

      this.file.onError.subscribe(error => console.log('Error!', error));;
    };

    this.pause = () => {
      this.file.pause();
    };

    this.stop = () => {
      this.file.stop();
    };

    this.unload = () => {
      this.file.release();
    };

    /*
    // Commenting this out because native Audio doesn't support web urls. Not going to put 70MB audio into the app.

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

    */

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilderSinglePage');
  }

}
