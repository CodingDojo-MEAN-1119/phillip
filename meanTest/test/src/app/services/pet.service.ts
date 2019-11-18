import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Pet } from '../models/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private baseURL = 'api/pets';

  constructor(private http: HttpClient) { }

  getPets(): Observable <Pet[]>  {
    return this.http.get<Pet[]>(this.baseURL);
  }

  createPet(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(this.baseURL, pet);
  }

  getOnePet(petID: string): Observable <Pet>{
    return this.http.get<Pet>(`${this.baseURL}/${petID}`);
  }

  updatePet(pet: Pet): Observable<Pet> {
    return this.http.put<Pet>(`${this.baseURL}/${pet._id}`, pet);
  }

  removePet(petID: string): Observable<Pet> {
    return this.http.delete<Pet>(`${this.baseURL}/${petID}`);
  }
}
