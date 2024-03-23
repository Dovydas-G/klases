class Pet {
    constructor(name, color) {
        this.name = name;
        this.color = color;
        this.breed = 'pet';
        this.sound = 'Au miau niom';
        this.emoji = '🐕🐈🐹'
    }    

    intro() {
        return`${this.name}: Hi, I am ${this.color} ${this.breed}. ${this.sound}!! ${this.emoji}`;
    }
}


class Dog extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Dog';
        this.sound = 'Au au';
        this.emoji = '🐕';
    }
}


class Cat extends Pet{
    constructor(name, color) {
        super(name, color);
        this.breed = 'Cat';
        this.sound = 'Miau miau';
        this.emoji = '🐈';
    }
}


class Hamster extends Pet {
    constructor(name, color) {
        super(name, color);
        this.breed = 'Hamster';
        this.sound = 'Niom niom';
        this.emoji = '🐹';
    }
}

const rexas = new Dog('Rexas', 'brown');
const brisius = new Dog('Brisius', 'white');
console.log(rexas.intro());
console.log(brisius.intro());


const pukis = new Cat('Pukis', 'brown');
const garfildas = new Cat('Garfildas', 'ginger');
console.log(pukis.intro())
console.log(garfildas.intro())


const steve = new Hamster('Steve', 'brown');
const spirgis = new Hamster('Spirgis', 'white-black');
console.log(steve.intro())
console.log(spirgis.intro())