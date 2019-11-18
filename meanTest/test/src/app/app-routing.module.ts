import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromHome from './home';

import { environment } from '../environments/environment';
import { HomeComponent } from './home';
const enableTracing = false && !environment.production;
const routes: Routes = [
  {
    path: '',
    redirectTo: '/pets',
    pathMatch: 'full'

  },
  {
    path: 'pets',
    children: [
      {
        path: '',
        component: fromHome.PetsListComponent,
      },
      {
        path: 'new',
        component: fromHome.PetNewComponent,
      },
      {
        path: ':id',
        component: fromHome.PetDetailComponent,
      },
      {
        path: ':id/edit',
        component: fromHome.PetEditComponent,
      },
    ],
  },


  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
