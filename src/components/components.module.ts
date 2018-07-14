import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { SearchResultComponent } from './search-result/search-result';
import { RepositoryComponent } from './repository/repository';

@NgModule({
	declarations: [SearchResultComponent,
    RepositoryComponent],
	imports: [ IonicModule],
	exports: [SearchResultComponent,
    RepositoryComponent]
})
export class ComponentsModule {}
