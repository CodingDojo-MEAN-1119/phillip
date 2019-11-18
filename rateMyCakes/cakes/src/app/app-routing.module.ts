import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromCakes from './cakes';

import { environment } from '../environments/environment';
import { AuthorizationComponent } from './authorization/authorization.component';
const enableTracing = false && !environment.production;
const routes: Routes = [
  {
    path: '',
    component: fromCakes.CakeListComponent,

  },
  {
    path: 'cakes',
    children: [
      {
        path: '',
        component: fromCakes.CakeListComponent,
      },
      {
        path: 'new',
        component: fromCakes.CakeNewComponent,
      },
      {
        path: ':id',
        component: fromCakes.CakeDetailComponent,
      },
      {
        path: ':id/edit',
        component: fromCakes.EditComponent,
      },
    ],
  },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
