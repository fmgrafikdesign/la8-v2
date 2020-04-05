import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

// Import native audio
//import {NativeAudio} from "@ionic-native/native-audio";

// Import media
//import { Media, MediaObject } from "@ionic-native/media";

// Import media
import { AudioProviderFactory } from "../../app/app.module";
import {AudioProvider, WebAudioTrack} from "ionic-audio";

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
  currentindex: any;

  allTracks: any[];
  selectedTrack: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider) {
    // console.log(this.navParams.get('bild'));
    this.bild = this.navParams.get('bild');
    this.interviews = this.bild.audio;
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
    console.log(this.allTracks);
  }

  // Pause all tracks, starting a new one is handled by the audio-track-play component
  pauseAllTracks() {
    this.allTracks.forEach((track) => {
      if(track.isPlaying) {
        track.pause();
      }
      //console.log(track);
    });
  }

  pauseCurrentTrack() {
    //console.log('pausing track: ', this._audioProvider.current);
    this._audioProvider.pause();
  }

  // Pauses the currently active track
  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    //console.log('pausing track: ', this._audioProvider.current);
    this._audioProvider.pause();
  }

  pauseOtherTracks(audio) {
    //this.currentindex
    //console.log('parameter:');
    //console.log(audio);

    // Pause other tracks, but not the one we clicked on right now.
    this.allTracks.forEach((track) => {
      if(track.isPlaying && audio.track.id != track.id) {
        //console.log(track.id + ' currently playing, pausing now');
        track.pause();
      }
      //console.log(track);
    });
  }

  onTrackFinished(track: any) {
    //console.log('Track finished', track)
  }

  // Stop tracks on leaving view
  ionViewWillLeave() {
    this.pauseAllTracks();
  }

}
