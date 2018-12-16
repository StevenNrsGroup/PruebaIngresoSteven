import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider , public modalCtrl: ModalController) {
  	this.obtenerFilms();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilmsPage');
  }

  abrirModal(data){
     var dataPersona = { data : data };

      var modalPage = this.modalCtrl.create('ModalPage',dataPersona);
      modalPage.present();

  }

  obtenerFilms() {
    this.restProvider.obtenerFilms()
    .then(data => {
      this.films = data;
      
      console.log("films");
      console.log(this.films);
      
      //agrega  los actores por pelicula 
      for (var i = 0; i < this.films.results.length; ++i) {
        let personas = [];
        for (var j = 0; j < this.films.results[i].characters.length; ++j) {
          
          this.restProvider.obtenerPeople(this.films.results[i].characters[j])
            .then(dataPeople => {
            
              personas.push(dataPeople);
            });
        }
        this.films.results[i].personas = personas;
      }
    });
  }



}


