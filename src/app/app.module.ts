import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { GithubProfilesApp } from './app.component';
import { GithubProvider } from '../providers/github/github';


@NgModule({
  declarations: [
    GithubProfilesApp,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(GithubProfilesApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    GithubProfilesApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubProvider
  ]
})
export class AppModule {}
