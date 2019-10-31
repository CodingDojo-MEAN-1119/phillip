class Ninja{
    constructor(name){
        this.speed =3;
        this.strength =3;
        this.health =100;
        this.name=name;
    }
    

    showStats(ninja){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength);
        return this;
    }
}

class Sensei extends Ninja{
    constructor(name,wisdom){
        super(name);
        this.speed =10;
        this.strength =10;
        this.health =200;
        this.wisdom =10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("There are many paths to enlightenment.");
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

const god = new Sensei("God");
const phillip = new Ninja("Phillip");
const tara = new Ninja("Tara");

phillip.showStats();
tara.showStats();
phillip.punch(tara);
tara.kick(phillip);

phillip.showStats();
tara.showStats();
god.showStats();
god.speakWisdom();
god.showStats();
tara.kick(god);