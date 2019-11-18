import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../services/book.service';
import {map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  @Input()
  book: Book;
  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.bookService.getOneBook(id))
    )
    .subscribe(book => {
          console.log('Book from API', book);
          this.book = book;
    });
  }


}
