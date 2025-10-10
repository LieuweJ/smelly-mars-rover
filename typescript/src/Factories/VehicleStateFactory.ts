import {Direction, DIRECTIONS, RoverState} from "../RoverState";

export class VehicleStateFactory {
    static createRover(initPosition: string = ""): RoverState {
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

    private static mapToCoordinate(possibleCoordinate: string): number | undefined {
        const coordinate = parseInt(possibleCoordinate, 10);

        if (this.isValidCoordinate(coordinate)) {
            return coordinate
        }
    }

    private static mapToDirection(possibleDirection: string): Direction | undefined {
        if (this.isValidDirection(possibleDirection)) {
            return possibleDirection
        }
    }

    private static isValidDirection(direction: string): direction is Direction {
        return Object.values(DIRECTIONS).includes(direction as Direction);
    }

    private static isValidCoordinate(position: number): boolean {
        return !isNaN(position);
    }
}