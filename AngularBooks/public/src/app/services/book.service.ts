import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // private baseURL = 'http://59498bce6d49df0011102cfc.mockapi.io/books';
  private baseURL = 'api/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable <Book[]>  {
    return this.http.get<Book[]>(this.baseURL);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.baseURL, book);
  }

  getOneBook(bookId: string): Observable <Book>{
    return this.http.get<Book>(`${this.baseURL}/${bookId}`);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.baseURL}/${book._id}`, book);
  }

  removeBook(bookId: string): Observable<Book> {
    return this.http.delete<Book>(`${this.baseURL}/${bookId}`);
  }

}
