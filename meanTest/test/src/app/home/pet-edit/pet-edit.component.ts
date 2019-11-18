import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../../services/pet.service';
import {map, switchMap } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {
  pet: Pet;
  petErrors: string[] = [];
  constructor(private route: ActivatedRoute, private petService: PetService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.petService.getOnePet(id))
    )
    .subscribe(pet => {
          console.log('Pet from API', pet);
          this.pet = pet;
    });
  }
  onSubmit(event: Event, form: NgForm){
    this.petService.updatePet({ ...form.value, _id: this.pet._id})
    .subscribe({
      next: updatePet => {
      console.log(updatePet);
      this.router.navigate(['/pets', updatePet._id]);
      },
      error:  error => this.handleErrors(error.error)
    });
  }
  private handleErrors(errors: string[] | string) {
    this.petErrors = Array.isArray(errors) ? errors : [errors];
  }
}
