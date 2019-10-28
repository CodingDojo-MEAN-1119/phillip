
var tigger = { character: "Tigger", greet: function() {console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!")}}; 
var pooh = { character: "Winnie the Pooh",  greet: function() {console.log("Oh Bother!")} };
var piglet = { character: "Piglet",  greet: function() {console.log("I wasn't expecting company!")}};       
var bees = { character: "Bees",  greet: function() {console.log("Buzz Buzz")}};   
var owl = { character: "Owl",  greet: function() {console.log("I'm so smart... smarter than you.")}};   
var kid = { character: "Christopher Robin",  greet: function() {console.log("Silly bear")}};   
var rabbit = { character: "Rabbit",  greet: function() {console.log("Look at what you've done to my garden!")}};   
var gopher = { character: "Gopher",  greet: function() {console.log("This will require some digging!")}};   
var kanga = { character: "Kanga",  greet: function() {console.log("Have you seen Roo?")}};   
var eeyore = { character: "Eeyore",  greet: function() {console.log("Thanks for noticing me.")}};   
var heff = { character: "Heffalumps",  greet: function() {console.log("Y'all gonna die!")}};   
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
    let cardDirect=["west","east","south","north"]
    for(let i=0; i<cardDirect.length; i++){
        if( dir == cardDirect[i]){
            if(cardDirect[i]=="west"){
                newLocation=player.location.west;
            }
            if(cardDirect[i]=="south"){
                newLocation=player.location.south;
            }
            if(cardDirect[i]=="north"){
                newLocation=player.location.north;
            }
            if(cardDirect[i]=="east"){
                newLocation=player.location.east;
            }
            player.location=newLocation;
            console.log("You are now at "+newLocation.character+"'s house. ");
            return newLocation.greet();
        }
    }
    return console.log("Please enter a valid cardinal direction.");
}

move("north");
move("south");
move("north");
move("east");
    

    
    
        


   
    
