import {Animals} from "./interface";

export abstract class Animal<T> implements Animals {
    constructor(
        public name: string,
        public age: number,
        public species: string,
        public sound: string,
        public type: "pet" | "wild",
        public region: T
    ) {}

}