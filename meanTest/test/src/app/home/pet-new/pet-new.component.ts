import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pet } from '../../models/pet';
import { NgForm } from '@angular/forms';
import {PetService} from '../../services/pet.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-pet-new',
  templateUrl: './pet-new.component.html',
  styleUrls: ['./pet-new.component.css']
})
export class PetNewComponent implements OnInit {
  pet = new Pet();
  petErrors: string[] = [];

  @Output()
  createPet = new  EventEmitter<Pet>();

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.petService.createPet(this.pet)
    .subscribe({
      next: createdPet =>{
      console.log(`The pet created: ${createdPet}`);
      this.pet = new Pet();
      form.reset();
      this.router.navigateByUrl('/');
      },
      error: error => this.handleErrors(error.error),
    });

  }
  private handleErrors(errors: string[] | string) {
    this.petErrors = Array.isArray(errors) ? errors : [errors];
  }
}
