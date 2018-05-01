import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// Import http and map Module
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

// Import topics-single Page
import {TopicsSinglePage} from "../topics-single/topics-single";

@Component({
  selector: 'page-contact',
  templateUrl: 'themenauswahl.html'
})
export class ContactPage {

  topics: any;
  navigateToSingle: any;

  constructor(public navCtrl: NavController, public http: Http) {

    this.navigateToSingle = (language) => {
      this.navCtrl.push(TopicsSinglePage, {
        info: language,
        topics: language.topics
      });
    };

    this.http.request('assets/fixtures/topics.json')
      .map(res => res.json())
      .subscribe(data => {
        this.topics = data;
      })
    ;
  }

}
