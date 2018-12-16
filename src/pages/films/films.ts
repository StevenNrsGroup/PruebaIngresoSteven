import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the FilmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-films',
  templateUrl: 'films.html',
})
export class FilmsPage {
  
  films:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  	this.obtenerFilms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

  obtenerFilms() {
    this.restProvider.obtenerFilms()
    .then(data => {
      this.films = data;
      console.log("films");
      console.log(this.films);
    });
  }

}
