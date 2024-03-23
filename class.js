const car = {
    brand: 'Audi',
    model: '80',
    color: 'red',
    doors: 5,
    isEngineOn: false,
    windowsHeight: [0, 0.5, 1, 1],
};


class Car {
    constructor (brand, model, color, price) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.price = price;
        this.isEngineOn = false;
        this.isRadioOn = false;
        this.windowsHeight = [1, 1, 1, 1];
        this.tankSize = 40;
        this.tankLevel = 5;
    }

    turnOnEngine() {
        this.isEngineOn = true;
    }
    turnOffEngine() {
        this.isEngineOn
    }

    fillTank(amount) {
        if (this.tankLevel + amount <= this.tankSize) {
            this.tankLevel += amount;

        }else {
            const diff = amount - (this.tankSize - this.tankLevel);
            this.tankLevel = this.tankSize;
            console.log(`Per daug, ipilta tik ${diff}L`);
        }
    }
}

const audi = new Car('Audi', '80', 'red', 300);
console.log(audi);

const tesla = new Car('Tesla', 'Roadster 2', 'black', 100_000);
console.log(tesla);


// console.log(audi.price)
// console.log(tesla.tankLevel)
// console.log(tesla.tankSize)


// console.log(audi.isEngineOn)
// audi.turnOnEngine()
// console.log(audi.isEngineOn)


// console.log(tesla.isEngineOn)
// tesla.turnOffEngine()
// console.log(tesla.isEngineOn)


console.log('Talpa:', audi.tankSize);
console.log('Dabartinis kiekis:', audi.tankLevel);




audi.fillTank(40)


console.log('Dabartinis kiekis:', audi.tankLevel);
