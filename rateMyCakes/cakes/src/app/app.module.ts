import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CakeNewComponent } from './cakes/cake-new/cake-new.component';
import { CakeDetailComponent } from './cakes/cake-detail/cake-detail.component';
import { CakeListComponent } from './cakes/cake-list/cake-list.component';
import { NavComponent } from './nav/nav.component';
import { EditComponent } from './cakes/edit/edit.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { LoginComponent } from './authorization/login/login.component';
import { RegistrationComponent } from './authorization/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    CakeNewComponent,
    CakeDetailComponent,
    CakeListComponent,
    NavComponent,
    EditComponent,
    AuthorizationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
