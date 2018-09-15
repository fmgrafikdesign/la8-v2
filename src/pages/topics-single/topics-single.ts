import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

// Import media
import { AudioProviderFactory } from "../../app/app.module";
import {AudioProvider, WebAudioTrack} from "ionic-audio";

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
  info: any;
  play: any;
  pause: any;
  stop: any;
  unload: any;
  interviews: any;
  currentindex: any;

  allTracks: any[];
  selectedTrack: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider) {
    this.topics = this.navParams.get('topics');
    //console.log(this.topics);
    this.info = this.navParams.get('info');

    // Prepare json data for audio provider factory
    // - set src
    // - set title

    let base = 'https://cdn.fmgrafikdesign.de/la8/latest/topics/';
    //console.log(this.topics);
    this.topics.forEach((topic) => {
      topic.preload = 'metadata';

      // src: base + language + id + file extension
      // example: http://cdn.fmgrafikdesign.de/la8/latest/topics/english/1.mp3

      topic.src = base + this.info.language + '/' + topic.uid + '.mp3';
    });
  }

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
    //console.log(this.allTracks);
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

  // Pauses the currently active track
  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    console.log('pausing track: ', this._audioProvider.current);
    this._audioProvider.pause();
//    this._audioProvider.tracks
  }

  // Stop tracks on leaving view
  ionViewWillLeave() {
    this.pauseAllTracks();
  }

}
