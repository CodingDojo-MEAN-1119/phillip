import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import * as fromBooks from './books';

import { environment } from '../environments/environment';
import {HomeComponent } from './home/home.component';


const enableTracing = false && !environment.production;

const routes: Routes = [
{
  path: '',
  component: HomeComponent,

},
{
  path: 'books',
  children: [
    {
      path: '',
      component: fromBooks.BookListComponent,
    },
    {
      path: 'new',
      component: fromBooks.BookNewComponent,
    },
    {
      path: ':id',
      component: fromBooks.BookDetailComponent,
    },
    {
      path: ':id/edit',
      component: fromBooks.BookEditComponent,
    },
  ],
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing})],
  exports: [RouterModule],

})


export class AppRoutingModule {}
