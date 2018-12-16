import { Component } from '@angular/core';
import { FilmsPage } from '../films/films';
import { StarshipsPage } from '../starships/starships';
import { VehiclesPage } from '../vehicles/vehicles';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = FilmsPage;
  tab2Root = StarshipsPage;
  tab3Root = VehiclesPage;

  constructor() {

  }
}
