import { Component, OnInit } from '@angular/core';
import { Cake } from '../../models';
import { CakeService } from '../../services';


@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {

  cakes: Cake[] = [];
  selectedCake: Cake;

  constructor(private cakeService: CakeService) { }

  ngOnInit() {
    this.cakeService.getCakes()
    .subscribe(cakes =>
      this.cakes = cakes
    );
  }
  onSelect(cake: Cake) {
    this.selectedCake = this.selectedCake === cake ? null : cake;
  }

  onCreate(cake: Cake) {
    this.cakeService.createCake(cake)
    .subscribe(createdCake => {
      this.cakes.push(createdCake);
    });
  }

  onDelete(cake: Cake) {
    this.cakeService.removeCake(cake._id)
    .subscribe( deletedCake => {
      console.log('deleted cake ', deletedCake);
      this.cakes = this.cakes.filter(currentCake => currentCake._id !== deletedCake._id);
    });
  }
  onEvent(event: Event) {
    event.stopPropagation();
  }
}
