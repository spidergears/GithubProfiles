import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-profile-search',
  templateUrl: 'profile-search.html',
})
export class ProfileSearchPage {
  userName: string;

  constructor(private navCtrl: NavController, private navParams: NavParams,
    private Toast: ToastController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfileSearchPage');
  }

  searchProfile(){
    if (!this.userName || this.userName == 'undefined'){
      this.Toast.create({
        message: 'Please enter userName to search',
        duration: 3000
      }).present();
      return
    }
    this.navCtrl.push('SearchResultsPage', {
      userName: this.userName
    })
  }

}
