import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GithubProvider } from '../../providers/github/github'
import { User } from '../../models/user.interface'
import { Repository } from '../../models/repository.interface'

/**
 * Generated class for the SearchResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  segment: 'profile/results/:userName'
})
@Component({
  selector: 'page-search-results',
  templateUrl: 'search-results.html',
})
export class SearchResultsPage {
  userName: string;
  user: User;
  repositories: Repository[];

  constructor(private navCtrl: NavController, private navParams: NavParams,
  private Github: GithubProvider) { }

  getUserInfo(): void {
    this.Github.getUserInfo(this.userName).subscribe((data: User) => this.user = data);
    // this.Github.mockGetUserInfo(this.userName).subscribe((data: User) => this.user = data);
    this.Github.getRepoInfo(this.userName).subscribe((data: Repository[]) => this.repositories = data);
    // this.Github.mockGetRepoInfo(this.userName).subscribe((data: Repository[]) => this.repositories = data);
  }

  ionViewWillLoad() {
    this.userName = this.navParams.get('userName')
    this.getUserInfo();
  }

}
