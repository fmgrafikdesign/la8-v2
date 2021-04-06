import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

// Import media
import {AudioProvider} from "ionic-audio";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  allTracks: any[];
  Tutorial: any;
  selectedTrack: any;

  constructor(public navCtrl: NavController, private _audioProvider: AudioProvider) {
    this.Tutorial = {
      src: 'http://cdn.fmgrafikdesign.de/la8/latest/opening.mp3',
      artist: 'Saskia Riedel',
      title: 'Was mache ich mit dieser App?',
      art: '',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    }
  };

  ngAfterContentInit() {
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks;
    // console.log(this.allTracks);
  }

  playSelectedTrack(track) {
    // use AudioProvider to control selected track
    // console.log(track);
    this._audioProvider.play(track);
  }

  // Pause all tracks, starting a new one is handled by the audio-track-play component
  pauseAllTracks() {
    this.allTracks.forEach((track) => {
      if(track.isPlaying) {
        track.pause();
      }
      // console.log(track);
    });
  }

  playTutorial() {

  }

  // Pauses the currently active track
  pauseSelectedTrack() {
    // use AudioProvider to control selected track
    console.log('pausing track: ', this._audioProvider.current);
    this._audioProvider.pause();
  }

  onTrackFinished(track: any) {
    console.log('Track finished', track);
  }

  // Stop tracks on leaving view
  ionViewWillLeave() {
    this.pauseAllTracks();
  }

}
