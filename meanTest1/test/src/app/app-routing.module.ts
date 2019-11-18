import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromHome from './home';;

import { environment } from '../environments/environment';
import { AuthorizationComponent } from './authorization/authorization.component';
const enableTracing = false && !environment.production;
const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,

  },
  {
    path: 'home',
    children: [
      {
        path: '',
        component: fromHome.HomeComponent,
      },
      // {
      //   path: 'new',
      //   component: fromCakes.CakeNewComponent,
      // },
      // {
      //   path: ':id',
      //   component: fromCakes.CakeDetailComponent,
      // },
      // {
      //   path: ':id/edit',
      //   component: fromCakes.EditComponent,
      // },
    ],
  },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
