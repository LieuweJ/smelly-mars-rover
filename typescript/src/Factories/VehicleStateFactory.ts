import {Direction, EAST, NORTH, RoverState, SOUTH, WEST} from "../RoverState";

const stringToDirectionMap: Record<string, Direction> = {
    [EAST]: Direction.E,
    [WEST]: Direction.W,
    [NORTH]: Direction.N,
    [SOUTH]: Direction.S,
}

export type IVehicleStateFactory = {
    createRover: (initPosition?: string) => RoverState
}

export class VehicleStateFactory implements IVehicleStateFactory {
    createRover(initPosition: string = ""): RoverState {
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