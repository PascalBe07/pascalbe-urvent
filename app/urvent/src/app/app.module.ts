import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {SingleEventPage} from "../pages/singleEvent/singleEvent";

const config = {
  apiKey: "AIzaSyAIJWn4Rn1SFANkQdrEOfQKajF4oOqYnXE",
  authDomain: "pascalbe-urvent.firebaseapp.com",
  databaseURL: "https://pascalbe-urvent.firebaseio.com",
  projectId: "pascalbe-urvent",
  storageBucket: "pascalbe-urvent.appspot.com",
  messagingSenderId: "633986136891"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SingleEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    SingleEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
