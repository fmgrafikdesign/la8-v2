import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams.get('bild'));
    this.bild = this.navParams.get('bild');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BilderSinglePage');
  }

}
