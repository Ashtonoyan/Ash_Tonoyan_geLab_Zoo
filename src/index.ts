class Animal{
    constructor(
       public name: string,
       public age: number,
       public species: string,
       public sound: string
    ) {}
    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }

    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species} `;
    }
}

class Zoo{
    private animal: zooAnimals[] = [];

    addAnimal(animal: zooAnimals):void{
        this.animal.push(animal);
        console.log(`${animal.name} added in Zoo`);
    }

    deleteAnimal(animal: zooAnimals):void{
        this.animal = this.animal.filter(animal => animal.name !== animal.name);
        console.log(`${animal.species} ${animal.name} removed in Zoo`);


    }

    showAnimal():void{
        console.log('In Zoo lives:');
        this.animal.forEach(animal => {
            console.log(`'Name is' ${animal.name},'age is' ${animal.age}, ${animal.species}`);
        })
    }

    showSound():void{
        console.log('All sound in our Zoo:');
        this.animal.forEach(animal => {
            console.log(`${animal.sound}`)
        })
    }
}

const zoo = new Zoo();
const Lion = new Animal("Simba", 3, "Lion", "Rrrrr")
const Bear = new Animal("Kosolapy", 5, "Bear", "Aaaaaa")
Lion.makesound()
console.log(Lion.getIfto())
zoo.addAnimal(Lion)
zoo.addAnimal(Bear)
zoo.showAnimal()
zoo.showSound()
console.log("Before deleting")
console.log("________________________")
zoo.deleteAnimal(Bear)
zoo.showAnimal()
zoo.showSound()

