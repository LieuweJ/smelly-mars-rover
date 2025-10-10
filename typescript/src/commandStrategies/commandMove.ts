import {EAST, NORTH, RoverState, SOUTH, WEST} from "../RoverState";

export class CommandMove {
    static execute(roverState: RoverState) {
        if (roverState.isFacing(EAST)) {
            roverState.moveOneEast();
        }
        if (roverState.isFacing(SOUTH)) {
            roverState.moveOneSouth();
        }
        if (roverState.isFacing(WEST)) {
            roverState.moveOneWest();
        }
        if (roverState.isFacing(NORTH)) {
            roverState.moveOneNorth();
        }
    }
}