import { USER_LIST } from './user.mocks';
import { Repository } from '../models/repository.interface'

const repoList: Repository[] = [
  {
    name: 'Ionic-Camera',
    description: 'Make things you love',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic-Geo',
    description: 'Make things you love',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic-Viberaration',
    description: 'Make things you love',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic-Physics',
    description: 'Make things you love',
    owner: USER_LIST[2]
  },
  {
    name: 'Ionic-Bring',
    description: 'Make things you love',
    owner: USER_LIST[1]
  },
  {
    name: 'Ionic-Pain',
    description: 'Make things you love',
    owner: USER_LIST[0]
  },
  {
    name: 'Ionic-Love',
    description: 'Make things you love',
    owner: USER_LIST[2]
  },
  {
    name: 'Ionic-Tai',
    description: 'Make things you love',
    owner: USER_LIST[2]
  },
]

export const REPO_LIST = repoList;
