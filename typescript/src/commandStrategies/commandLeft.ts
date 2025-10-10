import {EAST, NORTH, RoverState, SOUTH, WEST} from "../RoverState";

export class CommandLeft {
    static execute(roverState: RoverState) {
        if (roverState.isFacing(EAST)) {
            roverState.turnToNorth();
        } else if (roverState.isFacing(NORTH)) {
            roverState.turnToWest();
        } else if (roverState.isFacing(WEST)) {
            roverState.turnToSouth();
        } else if (roverState.isFacing(SOUTH)) {
            roverState.turnToEast();
        }
    }
}