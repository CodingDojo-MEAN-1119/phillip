class Player{
    constructor(name){
        this.name=name;
        this.hand =[];

    }
    takeCard(deck){
        if(deck instanceof Deck){
            deck.deal(this);
        }else{
            console.log("Please select a deck of cards.");
        }
        return this;
    }
    discard(deck){
        if(deck instanceof Deck && deck.cards.length<52){
            deck.cards.push(this.hand.pop());
        }else{
            console.log("This deck is full. Please add the card to a new deck.")
        }
        return this;
    }
}


class Card{
    constructor(suit,strVal,val){
        this.suit=suit;
        this.strVal=strVal;
        this.val=val;

    }
    show(){
        console.log("This is the",this.strVal,"of",this.suit+".");
        return this;
    }
}

class Deck{
    constructor(){
        this.cards=[];
       
    }
    add(card){
        if(card instanceof Card && this.cards.length<52){
            this.cards.push(card);
        }else{
            console.log("This deck is full. Please add the card to a new deck.")
        }
        return this;
    }
    shuffle(){
        let m = this.cards.length;
            while (m) {
                var i = Math.floor(Math.random() * m--);
                var t = this.cards[m];
                this.cards[m] = this.cards[i];
                this.cards[i] = t;
            }
            console.log("The deck has been shuffled.")
            return this;
    }
    reset(){
        console.log("The deck has been reset.");
        this.cards.sort();
        return this;
    }
    deal(player){
        if(player instanceof Player){
            let start = Math.floor(Math.random()*this.cards.length);
            const dealtCard= this.cards.splice(start,1);
            player.hand.push(dealtCard);
            console.log("Dealer has dealt the ",dealtCard.show())

        }else{
            console.log("Please deal to a valid player.")
        }   
        return this;
    }
    showDeck(){
        console.log("This deck has these cards: ");
        for(let i=0; i<this.cards.length; i++){
            this.cards[i].show();
        }
        return this;
    }
}

const redDeck=new Deck();
const phil= new Player("Phillip")
const card1 = new Card("Spades","Ace",1);
const card2 = new Card("Spades","Two",2);
const card3 = new Card("Spades","Three",3);
const card4 = new Card("Spades","Four",4);
const card5 = new Card("Spades","Five",5);
const card6 = new Card("Spades","Six",6);
const card7 = new Card("Spades","Seven",7);
const card8 = new Card("Spades","Eight",8);
const card9 = new Card("Spades","Nine",9);
const card10 = new Card("Spades","Ten",10);
const card11 = new Card("Spades","Jack",11);
const card12 = new Card("Spades","Queen",12);
const card13 = new Card("Spades","King",13);

redDeck.add(card1).add(card2).add(card3).add(card4).add(card5).add(card6).add(card7).add(card8).add(card9).add(card10).add(card11).add(card12).add(card13);
// redDeck.showDeck();
redDeck.shuffle();
// redDeck.reset();
// redDeck.showDeck();

phil.takeCard(redDeck).takeCard(redDeck).takeCard(redDeck).takeCard(redDeck).takeCard(redDeck);

console.log(phil.hand);