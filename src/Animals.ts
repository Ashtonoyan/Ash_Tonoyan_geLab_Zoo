import {Animal} from "./class_Animals";

export class Lion extends Animal {
    constructor(name: string, age: number, species: string, sound: string) {
        super(name, age, species, sound, "wild");
    }

    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }

    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species} `;
    }
}

export class Dog extends Animal {
    constructor(name: string, age: number, species: string, sound: string) {
        super(name, age, species, sound, "pet");
    }

    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }

    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}

export class Bear extends Animal {
    constructor(name: string, age: number, species: string, sound: string) {
        super(name, age, species, sound, "wild");
    }
    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`)
    }
    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}

export class Wolf extends Animal {
    constructor(name: string, age: number, species: string, sound: string) {
        super(name, age, species, sound, "wild");
    }
    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }
    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}

export class Tiger extends Animal {
    constructor(name: string, age: number, species: string, sound: string) {
        super(name, age, species, sound, "wild");
    }
    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }
    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}