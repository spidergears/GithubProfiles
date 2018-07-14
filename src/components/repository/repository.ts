import { Component, Input } from '@angular/core';
import { Repository } from '../../models/repository.interface';

@Component({
  selector: 'repository',
  templateUrl: 'repository.html'
})
export class RepositoryComponent {

  @Input() repository: Repository;

  constructor() {}

}
