export enum Direction {
    N = 'N',
    E = 'E',
    S = 'S',
    W = 'W',
}

export const NORTH = Direction.N;
export const WEST = Direction.W;
export const SOUTH = Direction.S;
export const EAST = Direction.E;

export interface VehicleState {
    isFacing(direction: Direction): boolean;

    moveOneNorth(): void;

    moveOneWest(): void;

    moveOneSouth(): void;

    moveOneEast(): void;

    turnToEast(): void;

    turnToSouth(): void;

    turnToWest(): void;

    turnToNorth(): void;

    printCurrentPosition(): string;
}

export class RoverState implements VehicleState {
    eastWest: number;
    northSouth: number;
    frontFacing: string;

    constructor(eastWest: number = 0, northSouth: number = 0, frontFacing: Direction = NORTH) {
        this.eastWest = eastWest;
        this.northSouth = northSouth;
        this.frontFacing = frontFacing;
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