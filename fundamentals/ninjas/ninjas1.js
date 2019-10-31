function Ninja(name){
    
    var speed =3;
    var strength =3;
    this.health =100;
    this.name=name;
    

    this.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength);
        return this;
    }

}

Ninja.prototype.sayName=function(){
    console.log("My name is "+this.name);
    return this;
}

Ninja.prototype.drinkSake =function(){
    this.health+= 10;
    return this;
}

const ninja1 = new Ninja("Phillip");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();