import { Component, OnInit, Input } from '@angular/core';
import { Pet } from '../../models/pet';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../../services/pet.service';
import {map, switchMap } from 'rxjs/operators';
import {Router} from '@angular/router';
import { format } from 'url';

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  @Input()
  pet: Pet;

  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) { }

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
  onDelete(pet: Pet) {
    this.petService.removePet(pet._id)
    .subscribe( deletedPet => {
      console.log('deleted pet ', deletedPet);
      this.router.navigateByUrl('/');
    });
  }
  addLike(pet: Pet){
    this.route.paramMap
    .pipe(
      map(params => params.get('id')),
      switchMap(id => this.petService.getOnePet(id))
    )
    // tslint:disable-next-line: no-shadowed-variable
    .subscribe(pet => {
          this.pet = pet;
          this.pet.likes += 1;
    });
  }


}
