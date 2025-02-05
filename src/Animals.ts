import {Animal} from "./class_Animals";

export class Lion<T> extends Animal<T> {
    constructor(name: string, age: number, species: string, sound: string, region: T) {
        super(name, age, species, sound, "wild", region);
    }

    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }

    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}

export class Dog<T> extends Animal<T> {
    constructor(name: string, age: number, species: string, sound: string, region: T) {
        super(name, age, species, sound, "pet", region);
    }

    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }

    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}

export class Bear<T> extends Animal<T> {
    constructor(name: string, age: number, species: string, sound: string, region: T) {
        super(name, age, species, sound, "wild", region);
    }
    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`)
    }
    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}

export class Wolf<T> extends Animal<T> {
    constructor(name: string, age: number, species: string, sound: string, region: T) {
        super(name, age, species, sound, "wild", region);
    }
    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }
    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}

export class Tiger<T> extends Animal<T> {
    constructor(name: string, age: number, species: string, sound: string, region: T) {
        super(name, age, species, sound, "wild", region);
    }
    makesound():void{
        console.log(`${this.name} "makes" ${this.sound}`);
    }
    getIfto():string{
        return `Name is ${this.name}, age is ${this.age}, "species" ${this.species}. Type is ${this.type} `;
    }
}