import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import http and map Module
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';

// Import bilder-single Page
import { BilderSinglePage } from '../bilder-single/bilder-single';

@Component({
  selector: 'page-about',
  templateUrl: 'bilder-auswahl.html'
})
export class BilderAuswahlPage {

  bilder: any;
  test: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.test = (bild) => {
      this.navCtrl.push(BilderSinglePage, {
        bild: bild
      });
    };

    this.http.get('https://hbkapp.fmgrafikdesign.de/audioguides/2018-03/bilder.json').map(res => res.json()).subscribe(data => {
      this.bilder = data;
      console.log(this.bilder);

      /* TODO Cash results on storage, preferrably with images */
    })
  }

}
