// Creating class of ninja with the arguements and its predefined attriutes
class Ninja{
    // Crerating constructor with the name and strength as the arguements
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    // Creating methods to display the name and strength
    sayName(){
        console.log(`My name is ${this.name}`);
    }

    showStats(){
        console.log(`My speed is ${this.speed}` + ` and my strength is ${this.strength}`);
    }

    drinkSake(){
        this.health += 10;
        console.log(`My health is now ${this.health} because I drank sake!`);
    }
}

// Creating instances of the class Ninja
const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();

// Instance of the class Ninja and sake method
const ninja2 = new Ninja("John")
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();

// * New part of the assignment: Working with supers and extenders
// The only argument that the Sensei class needs is the name, similar to the Ninja class
class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// Creating instance of the class Sensei
const superSensei = new Sensei("Master Splinter");
// Calling the methods of the class Sensei
superSensei.sayName();
superSensei.speakWisdom();