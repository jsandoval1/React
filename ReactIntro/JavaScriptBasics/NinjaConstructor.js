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
