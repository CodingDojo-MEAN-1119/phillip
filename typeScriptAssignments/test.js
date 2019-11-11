"use strict";
class Bike {
    constructor(price, max_speed, miles = 0) {
        this.price = price;
        this.max_speed = max_speed;
        this.miles = miles;
    }
    displayInfo() {
        console.log(`Price: ${this.price}, Max Speed: ${this.max_speed}, Miles: ${this.miles}.`);
        return this;
    }
    ride() {
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
bike2.displayInfo();
