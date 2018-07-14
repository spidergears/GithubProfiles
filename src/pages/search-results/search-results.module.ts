import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SearchResultsPage } from './search-results';
import { ComponentsModule } from '../../components/components.module'
@NgModule({
  declarations: [
    SearchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(SearchResultsPage),
    ComponentsModule
  ],
})
export class SearchResultsPageModule {}
