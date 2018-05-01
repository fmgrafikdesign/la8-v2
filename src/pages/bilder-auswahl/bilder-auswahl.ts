import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import http and map Module
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

// Import image caching
import { IonicImageLoader } from "ionic-image-loader";

// Import bilder-single Page
import { BilderSinglePage } from '../bilder-single/bilder-single';

@Component({
  selector: 'page-about',
  templateUrl: 'bilder-auswahl.html'
})
export class BilderAuswahlPage {

  bilder: any;
  navigateToSingle: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.navigateToSingle = (bild) => {
      this.navCtrl.push(BilderSinglePage, {
        bild: bild
      });
    };

    this.http.request('assets/fixtures/bilder.json').map(res => res.json()).subscribe(data => {
      this.bilder = data;
      console.log(this.bilder);

      /* TODO Cash results on storage, preferably with images */
    });

  }

}
