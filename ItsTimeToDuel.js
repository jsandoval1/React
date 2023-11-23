// Class of Ninja, only arguement is the name
class Ninja {
    // Co
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    // Methods
    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`My speed is ${this.speed}` + ` and my strength is ${this.strength}. My health is ${this.health}`);
    }

    hardAlgorithm() {
        this.cost -= 2;
        this.resilience += 3;
        console.log(`My resilience is now ${this.resilience} because I did a hard algorithm!`);
    }

    unhandledPromiseRejection() {
        this.cost -= 1;
        this.resilience -= 2;
        console.log(`My resilience is now ${this.resilience} because I did an unhandled promise rejection!`);
    }

    pairProgramming() {
        this.cost += 3;
        this.power += 2;
        console.log(`My power is now ${this.power} and my resilience is now ${this.resilience} because I did pair programming!`);
    }

    // Attack method that takes in a target as an arguement
    attack(target) {
        const damage = this.strength * 5;
        target.health -= damage;
        console.log(`${this.name} attacked ${target.name} for ${damage} damage!`);
    }
}

// RedBeltNinja class that extends the Ninja class
class RedBeltNinja extends Ninja {
    constructor(name) {
        super(name);
        this.cost = 3;
        this.power = 3;
        this.resilience = 4;
    }
}

// BlackBeltNinja class that extends the Ninja class
class BlackBeltNinja extends Ninja {
    constructor(name) {
        super(name);
        this.cost = 4;
        this.power = 5;
        this.resilience = 4;
    }
}

// Instances using the RedBeltNinja class
const ninja2 = new RedBeltNinja("John")
ninja2.sayName();
ninja2.hardAlgorithm();
ninja2.unhandledPromiseRejection();

// Instances using the BlackBeltNinja class
const ninja3 = new BlackBeltNinja("Jack")
ninja3.sayName();
ninja3.showStats();
ninja2.attack(ninja3);
ninja3.showStats();