import {Component} from '@angular/core';

import {BilderAuswahlPage} from '../bilder-auswahl/bilder-auswahl';
import {ContactPage} from '../themenauswahl/themenauswahl';
import {HomePage} from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BilderAuswahlPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
