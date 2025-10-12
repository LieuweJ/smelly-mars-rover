import {RoverState} from "../RoverState";

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

    getFacingDirection(): Direction;

    move(direction: Direction, squares: number): void;

    turnTo(direction: Direction): void;

    printCurrentPosition(): string;
}

const stringToDirectionMap: Record<string, Direction> = {
    [EAST]: Direction.E,
    [WEST]: Direction.W,
    [NORTH]: Direction.N,
    [SOUTH]: Direction.S,
}

export type VehicleStateFactory<T> = {
    create: (initPosition?: T) => VehicleState;
}

export class ToRoverSupportedStateFactory implements VehicleStateFactory<string> {
    create(initPosition = ""): RoverState {
        const startingPositions = initPosition.split(" ");

        if (startingPositions.length < 3) {
            return new RoverState();
        }

        return new RoverState(
            this.mapToCoordinate(startingPositions[0]),
            this.mapToCoordinate(startingPositions[1]),
            this.mapToDirection(startingPositions[2])
        )
    }

    private mapToCoordinate(possibleCoordinate: string): number | undefined {
        const coordinate = parseInt(possibleCoordinate, 10);

        if (this.isValidCoordinate(coordinate)) {
            return coordinate;
        }
    }

    private mapToDirection(possibleDirection: string): Direction | undefined {
        return stringToDirectionMap[possibleDirection];
    }

    private isValidCoordinate(position: number): boolean {
        return !isNaN(position);
    }
}