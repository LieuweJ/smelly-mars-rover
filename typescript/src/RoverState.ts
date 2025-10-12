import {Direction, EAST, NORTH, SOUTH, VehicleState, WEST} from "./Factories/ToRoverSupportedStateFactory";

export class RoverState implements VehicleState {
    constructor(
        private eastWest: number = 0,
        private northSouth: number = 0,
        private frontFacing: Direction = NORTH) {
    }

    isFacing(direction: Direction) {
        return this.frontFacing === direction;
    }

    moveNorthBy(squares: number) {
        this.northSouth = this.northSouth + squares;
    }

    moveWestBy(squares: number) {
        this.eastWest = this.eastWest - squares;
    }

    moveSouthBy(squares: number) {
        this.northSouth = this.northSouth - squares;
    }

    moveEastBy(squares: number) {
        this.eastWest = this.eastWest + squares;
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