import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './home/nav/nav.component';
import { HomeComponent } from './home/home/home.component';
import { PetsListComponent } from './home/pets-list/pets-list.component';
import { PetDetailComponent } from './home/pet-detail/pet-detail.component';
import { PetNewComponent } from './home/pet-new/pet-new.component';
import { PetEditComponent } from './home/pet-edit/pet-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    PetsListComponent,
    PetDetailComponent,
    PetNewComponent,
    PetEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
