class Bike {
    constructor(
        public price: number ,
        public max_speed: number,
        public miles: number =0,
        ) { }
   displayInfo(){
       console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}.`);
       return this;
   }
   ride(){
       this.miles += 10;
       return this;
   }
    reverse() {
        this.miles -= 5;
        return this;
   }
}
const diamondBack = new Bike(90, 35);
const bike2 = new Bike(90, 35);
const bike3 = new Bike(90, 35);

diamondBack.ride().ride().reverse().displayInfo();
