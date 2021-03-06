import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {

  }

  getTasks() {
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/');
    // // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    return this._http.get('/');
 }

 getPokemon(){
  let bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  bulbasaur.subscribe(data => console.log('Got my pokemon!', data));

}

}

