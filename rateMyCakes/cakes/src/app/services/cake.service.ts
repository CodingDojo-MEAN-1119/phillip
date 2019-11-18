import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Cake } from '../models/cakes';

@Injectable({
  providedIn: 'root'
})
export class CakeService {

  private baseURL = 'api/cakes';

  constructor(private http: HttpClient) { }

  getCakes(): Observable <Cake[]>  {
    return this.http.get<Cake[]>(this.baseURL);
  }

  createCake(cake: Cake): Observable<Cake> {
    return this.http.post<Cake>(this.baseURL, cake);
  }

  getOneCake(cakeId: string): Observable <Cake>{
    return this.http.get<Cake>(`${this.baseURL}/${cakeId}`);
  }

  updateCake(cake: Cake): Observable<Cake> {
    return this.http.put<Cake>(`${this.baseURL}/${cake._id}`, cake);
  }

  removeCake(cakeId: string): Observable<Cake> {
    return this.http.delete<Cake>(`${this.baseURL}/${cakeId}`);
  }

}
