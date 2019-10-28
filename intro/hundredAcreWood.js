
var tigger = { character: "Tigger" }; 
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet"};       
var bees = { character: "Bees"};   
var owl = { character: "Owl"};   
var kid = { character: "Christopher Robin"};   
var rabbit = { character: "Rabbit"};   
var gopher = { character: "Gopher"};   
var kanga = { character: "Kanga"};   
var eeyore = { character: "Eeyore"};   
var heff = { character: "Heffalumps"};   
tigger.north = pooh; 
pooh.south = tigger;
pooh.west=piglet;   
pooh.east=bees;
pooh.north=kid;
bees.west=pooh;
bees.north=rabbit;   
piglet.east = pooh;  
piglet.north=owl;  
owl.east=kid;
owl.south=piglet;
kid.west=owl;
kid.east=rabbit;
kid.north=kanga;
kid.south=pooh;
rabbit.west=kid;
rabbit.south=bees;
rabbit.east=gopher;
gopher.west=rabbit;
kanga.south=kid;
kanga.north=eeyore;
eeyore.south=kanga;
eeyore.east=heff;
heff.west=eeyore;

// console.log(tigger.north.north.north);

var player={
    location:tigger
}

function move(direction){
    let newLocation;
    let dir=direction.toLowerCase();
    if(dir=="north"){
        newLocation =player.location.north;
        player.location=newLocation;
        return console.log("You are now at "+newLocation.character);
    }    
    if(dir=="west"){
        newLocation =player.location.west;
        player.location=newLocation;
        return console.log("You are now at "+newLocation.character);
    }    
    if(dir=="south"){
        newLocation =player.location.south;
        player.location=newLocation;
        return console.log("You are now at "+newLocation.character);
    }     
    if(dir=="east"){
        newLocation =player.location.east;
        player.location=newLocation;
        return console.log("You are now at "+newLocation.character);
    }     
    return console.log("Please enter a valid cardinal direction.");
}

move("north");
move("south");
move("north");
move("east");
    

   
    
