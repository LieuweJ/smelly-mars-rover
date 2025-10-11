import {Direction, EAST, NORTH, SOUTH, VehicleState, WEST} from "./Factories/RoverStateFactory";

export class RoverState implements VehicleState {
    eastWest: number;
    northSouth: number;
    frontFacing: Direction;

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