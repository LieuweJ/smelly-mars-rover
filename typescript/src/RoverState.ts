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

export enum COMMANDS{
    R = "R",
    L = "L",
    M = "M"
}

export const COMMAND_RIGHT = COMMANDS.R;
export const COMMAND_LEFT = COMMANDS.L;
export const COMMAND_MOVE = COMMANDS.M;

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