import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet';
import { PetService } from '../../services/pet.service';

@Component({
  selector: 'app-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.css']
})
export class PetsListComponent implements OnInit {

  pets: Pet[] = [];
  selectedPet: Pet;

  constructor(private petService: PetService) { }

  ngOnInit() {
    this.petService.getPets()
    .subscribe(pets =>
      this.pets = pets
    );
  }
  onSelect(pet: Pet) {
    this.selectedPet = this.selectedPet === pet ? null : pet;
  }
  onDelete(pet: Pet) {
    this.petService.removePet(pet._id)
    .subscribe( deletedPet => {
      console.log('deleted pet ', deletedPet);
      this.pets = this.pets.filter(currentPet => currentPet._id !== deletedPet._id);
    });
  }

  onEvent(event: Event) {
    event.stopPropagation();
  }

}
