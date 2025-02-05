import {Lion, Dog, Bear, Wolf, Tiger} from "./Animals";
import {Animal} from "./class_Animals";


class Zoo<T>{
    private animal: Animal<T>[] = [];

    addAnimal(animal: Animal<T>):void{
        this.animal.push(animal);
        console.log(`${animal.name} added in Zoo`);
    }

    deleteAnimal(animalToDelete: Animal<T>): void {
        this.animal = this.animal.filter(animal => animal !== animalToDelete);
        console.log(`${animalToDelete.species} ${animalToDelete.name} removed in Zoo`);
    }

    showAnimal():void{
        console.log('In Zoo lives:');
        this.animal.forEach(animal => {
            console.log(`'Name is' ${animal.name},'age is' ${animal.age}, ${animal.species}. Type is ${animal.type}`);
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
const Lions = new Lion("Simba", 3, "Lion", "Rrrrr", 55)
const Dogs = new Dog("Layka", 3, "Dog", "Afaf", "Ge")
const Bears = new Bear("Kosolapy", 5, "Bear", "Aaaaa", 5)
const Woff = new Wolf("Akela", 4, "Wolf", "Auuu", "Am")
const Tigers = new Tiger("Tigr", 2, "Tiger", "Rrrrr", "Amur")
Lions.makesound()
console.log(Lions.getIfto())
zoo.addAnimal(Lions)
zoo.addAnimal(Dogs)
zoo.addAnimal(Bears)
zoo.addAnimal(Woff)
zoo.addAnimal(Tigers)
zoo.showAnimal()
zoo.showSound()
console.log("Before deleting")
console.log("________________________")
zoo.deleteAnimal(Bears)
zoo.showAnimal()
zoo.showSound()