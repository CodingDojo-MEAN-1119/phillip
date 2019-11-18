import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from '../../services/book.service';
import {map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  book: Book;

  constructor(private route: ActivatedRoute, private bookService: BookService, private router: Router) { }

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
  onSubmit(event: Event, form: NgForm){
    this.bookService.updateBook({ ...form.value, _id: this.book._id})
    .subscribe(updateBook => {
      console.log(updateBook);
      this.router.navigate(['/books', updateBook._id]);
    })
  }
}
