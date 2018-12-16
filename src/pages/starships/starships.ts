import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the StarshipsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-starships',
  templateUrl: 'starships.html',
})
export class StarshipsPage {

  starships:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,public restProvider: RestProvider) {
  	this.obtenerStarships();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarshipsPage');
  }

   obtenerStarships() {
    this.restProvider.obtenerStarships()
    .then(data => {
      this.starships = data;
      console.log("Starships");
      console.log(this.starships);
    });
  }

}
