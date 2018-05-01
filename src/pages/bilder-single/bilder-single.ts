import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

// Import native audio
import {NativeAudio} from "@ionic-native/native-audio";

// Import media
import { Media, MediaObject } from "@ionic-native/media";

import { AudioProviderFactory } from "../../app/app.module";
import {AudioProvider} from "ionic-audio";

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

  myTracks: any[];
  allTracks: any[];
  selectedTrack: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio, private media: Media, private _audioProvider: AudioProvider) {
    console.log(this.navParams.get('bild'));
    this.bild = this.navParams.get('bild');
    this.interviews = this.bild.audio;

    this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'img/johnmayer.jpg',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    },
      {
        src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
        artist: 'John Mayer',
        title: 'Who Says',
        art: 'img/johnmayer.jpg',
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track,  set to 'none' to turn off
      }];

    /* Commenting this out because it doesn't work at all
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
    */

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

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
  }

  playSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.play(this.selectedTrack);
  }

  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    this._audioProvider.pause(this.selectedTrack);
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilderSinglePage');
  }

}
