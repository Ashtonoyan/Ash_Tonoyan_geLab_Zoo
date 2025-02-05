import {Animals} from "./interface";

export abstract class Animal implements Animals {
    constructor(
        public name: string,
        public age: number,
        public species: string,
        public sound: string,
        public type: "pet" | "wild"
    ) {}

}