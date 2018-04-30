import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import image loader for caching
import { IonicImageLoader } from "ionic-image-loader";

import { BilderAuswahlPage } from '../pages/bilder-auswahl/bilder-auswahl';
import { ContactPage } from '../pages/themenauswahl/themenauswahl';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BilderSinglePage } from "../pages/bilder-single/bilder-single";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BilderAuswahlPage,
    ContactPage,
    HomePage,
    TabsPage,
    BilderSinglePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicImageLoader.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BilderAuswahlPage,
    ContactPage,
    HomePage,
    TabsPage,
    BilderSinglePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
