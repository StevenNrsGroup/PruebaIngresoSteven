import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl:any ;	
  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
    this.apiUrl = "https://swapi.co/api";
  }

  
  obtenerFilms() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl+'/films').subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }

  obtenerStarships() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl+'/starships').subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }

  obtenerVehicles() {
	  return new Promise(resolve => {
	    this.http.get(this.apiUrl+'/vehicles').subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }

   obtenerPeople(url) {
	  return new Promise(resolve => {
	    this.http.get(url).subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	    });
	  });
  }


}
