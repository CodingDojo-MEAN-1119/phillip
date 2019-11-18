import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from '../../models/book';
import { NgForm } from '@angular/forms';
import {BookService} from '../../services/book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-new',
  templateUrl: './book-new.component.html',
  styleUrls: ['./book-new.component.css']
})
export class BookNewComponent implements OnInit {
  book = new Book();

  @Output()
  createBook = new  EventEmitter<Book>();

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.bookService.createBook(this.book)
    .subscribe( createdBook => {
      this.book = new Book();
      form.reset();

      // this.router.navigate(['/']);

      // Always an absolute path - not dynamic routing
      this.router.navigateByUrl('/');
    });

  }

}
