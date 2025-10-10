export enum Direction {
    N = "N",
    E = "E",
    S = "S",
    W = "W"
}

export const NORTH = Direction.N;
export const WEST = Direction.W;
export const SOUTH = Direction.S;
export const EAST = Direction.E;

export enum COMMAND {
    R = "R",
    L = "L",
    M = "M"
}

export const COMMAND_TURN_RIGHT = COMMAND.R;
export const COMMAND_TURN_LEFT = COMMAND.L;
export const COMMAND_MOVE = COMMAND.M;

export class RoverState {
    eastWest: number = 0;
    northSouth: number = 0;
    frontFacing: string = NORTH;

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