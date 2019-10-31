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
Ninja.prototype.punch=function(ninja){
    if(ninja instanceof Ninja){
        ninja.health -=5;
        console.log(this.name+" punched "+ninja.name+" and "+ninja.name+" lost 5 health!");
        return this;
    }else{
        return console.log("You need to punch a ninja!");
    }
}
Ninja.prototype.kick=function(ninja){
    if(ninja instanceof Ninja){
        ninja.health -=15;
        console.log(this.name+" kicked "+ninja.name+" and "+ninja.name+" lost 15 health!");
        return this;
    }else{
        return console.log("You need to kick a ninja!");
    }
}

const sam = [];
const phillip = new Ninja("Phillip");
const tara = new Ninja("Tara");

phillip.showStats();
tara.showStats();
phillip.punch(tara);
tara.kick(sam);

phillip.showStats();
tara.showStats();