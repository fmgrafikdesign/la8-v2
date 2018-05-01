import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule} from "@angular/http";
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Import image loader for caching
import { IonicImageLoader } from "ionic-image-loader";

// Import native audio
import { NativeAudio } from '@ionic-native/native-audio';

// Import media, because native audio does not support web urls
import { Media, MediaObject } from '@ionic-native/media';

// Import ionic pro features
import { Pro } from '@ionic/pro';

Pro.init('c4fb9fa4', {
  appVersion: '0.0.2'
});

import { BilderAuswahlPage } from '../pages/bilder-auswahl/bilder-auswahl';
import { ContactPage } from '../pages/themenauswahl/themenauswahl';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { BilderSinglePage } from "../pages/bilder-single/bilder-single";
import { TopicsSinglePage } from "../pages/topics-single/topics-single";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Ionic error handling
@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    Pro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}

@NgModule({
  declarations: [
    MyApp,
    BilderAuswahlPage,
    ContactPage,
    HomePage,
    TabsPage,
    BilderSinglePage,
    TopicsSinglePage
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
    BilderSinglePage,
    TopicsSinglePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    [{provide: ErrorHandler, useClass: IonicErrorHandler}],
    NativeAudio,
    Media
  ]
})
export class AppModule {}
