import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[] = [];
  selectedBook: Book;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
    .subscribe(books =>
      this.books = books
    );
  }
  onSelect(book: Book) {
    this.selectedBook = this.selectedBook === book ? null : book;
  }

  onCreate(book: Book) {
    this.bookService.createBook(book)
    .subscribe(createdBook => {
      this.books.push(createdBook);
    });
  }

  onDelete(book: Book) {
    this.bookService.removeBook(book._id)
    .subscribe( deletedBook => {
      console.log('deleted book ', deletedBook);
      this.books = this.books.filter(currentBook => currentBook._id !== deletedBook._id);
    });
  }
  onEvent(event: Event) {
    event.stopPropagation();
  }
}
