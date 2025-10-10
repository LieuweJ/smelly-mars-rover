export const DIRECTIONS = {
    N: "N",
    E: "E",
    S: "S",
    W: "W",
} as const;

export type Direction = typeof DIRECTIONS[keyof typeof DIRECTIONS];

export const NORTH = DIRECTIONS.N;
export const WEST = DIRECTIONS.W;
export const SOUTH = DIRECTIONS.S;
export const EAST = DIRECTIONS.E;

export class RoverState {
    eastWest: number;
    northSouth: number;
    frontFacing: string;

    constructor(eastWest: number = 0, northSouth: number = 0, frontFacing: Direction = NORTH) {
        this.eastWest = eastWest;
        this.northSouth = northSouth;
        this.frontFacing = frontFacing;
    }

    static isValidDirection(direction: string): direction is Direction {
        return Object.values(DIRECTIONS).includes(direction as Direction);
    }

    isFacing(direction: Direction) {
        return this.frontFacing === direction;
    }

    moveOneNorth() {
        this.northSouth++;
    }

    moveOneWest() {
        this.eastWest--;
    }

    moveOneSouth() {
        this.northSouth--;
    }

    moveOneEast() {
        this.eastWest++;
    }

    turnToEast() {
        this.frontFacing = EAST;
    }

    turnToSouth() {
        this.frontFacing = SOUTH;
    }

    turnToWest() {
        this.frontFacing = WEST;
    }

    turnToNorth() {
        this.frontFacing = NORTH;
    }

    printCurrentPosition(): string {
        return `${this.eastWest} ${this.northSouth} ${this.frontFacing}`;
    }
} 