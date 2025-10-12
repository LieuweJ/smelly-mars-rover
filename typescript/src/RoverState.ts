import {Direction, EAST, NORTH, SOUTH, VehicleState, WEST} from "./Factories/RoverStateFactory";

enum Axis {
    eastWest = 'eastWest',
    northSouth = 'northSouth',
}

export class RoverState implements VehicleState {
    private readonly axisMultipliers: Map<Direction, { multiplier: number, axis: Axis }> = new Map([
        [EAST, {multiplier: 1, axis: Axis.eastWest}],
        [WEST, {multiplier: -1, axis: Axis.eastWest}],
        [NORTH, {multiplier: 1, axis: Axis.northSouth}],
        [SOUTH, {multiplier: -1, axis: Axis.northSouth}],
    ]);

    constructor(
        private eastWest: number = 0,
        private northSouth: number = 0,
        private frontFacing: Direction = NORTH) {
    }

    moveIn(direction: Direction, squares: number) {
        const axisMultiplier = this.axisMultipliers.get(direction);
        if (!axisMultiplier) {
            return;
        }

        const movement = squares * axisMultiplier.multiplier;

        this[axisMultiplier.axis] += movement;
    }

    isFacing(direction: Direction) {
        return this.frontFacing === direction;
    }

    getFacingDirection(): Direction {
        return this.frontFacing;
    }

    turnTo(direction: Direction) {
        this.frontFacing = direction;
    }

    printCurrentPosition(): string {
        return `${this.eastWest} ${this.northSouth} ${this.frontFacing}`;
    }
} 