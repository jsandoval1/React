class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`My name is ${this.name}`);
    }

    showStats() {
        console.log(`My speed is ${this.speed}` + ` and my strength is ${this.strength}. My health is ${this.health}`);
    }

    drinkSake() {
        this.health += 10;
        console.log(`My health is now ${this.health} because I drank sake!`);
    }

    attack(target) {
        const damage = this.strength * 5;
        target.health -= damage;
        console.log(`${this.name} attacked ${target.name} for ${damage} damage!`);
    }

    hardAlgorithm() {
        this.strength += 3;
        console.log(`My strength is now ${this.strength} because I completed the hard algorithm!`);
    }

    unhandledPromiseRejection() {
        this.health -= 5;
        console.log(`My health is now ${this.health} because I didn't handle my promise rejection!`);
    }

    pairProgramming() {
        this.speed += 10;
        console.log(`My speed is now ${this.speed} because I did pair programming!`);
    }
}

class RedBeltNinja extends Ninja {
    constructor(name) {
        super(name);
        this.cost = 3;
        this.power = 3;
        this.resilience = 4;
    }
}

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