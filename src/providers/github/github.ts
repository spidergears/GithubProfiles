import { HttpClient, Response } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'
import 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/observable/of'
import 'rxjs/add/observable/throw'

import { User } from '../../models/user.interface'
import { USER_LIST } from '../../mocks/user.mocks'
import { REPO_LIST } from '../../mocks/repository.mocks'
/*
  Generated class for the GithubProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubProvider {

  private baseUrl: string = 'https://api.github.com/users'

  constructor(private http: HttpClient) {
    console.log('Hello GithubProvider Provider');
  }

  getUserInfo(userName: string):Observable<User> {
    return this.http.get(`${this.baseUrl}/${userName}`)
        .map((data: Response) => data)
  }

  getRepoInfo(userName: string):Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${userName}/repos`)
        .map((data: Response) => data)
  }

  mockGetUserInfo(userName: string):Observable<User> {
    return Observable.of(USER_LIST.filter(user => user.name === userName)[0]);
  }

  mockGetRepoInfo(userName: string):Observable<Repository[]> {
    return Observable.of(REPO_LIST.filter(repo => repo.owner.name === userName));
  }

}
