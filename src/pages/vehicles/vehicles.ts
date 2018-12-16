import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the VehiclesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vehicles',
  templateUrl: 'vehicles.html',
})
export class VehiclesPage {

  vehicles:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
  	this.obtenerVehicles();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VehiclesPage');
  }

   obtenerVehicles() {
    this.restProvider.obtenerVehicles()
    .then(data => {
      this.vehicles = data;
      console.log("Vehicles");
      console.log(this.vehicles);
    });
  }

}
