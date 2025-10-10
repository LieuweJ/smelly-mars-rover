import {EAST, NORTH, RoverState, SOUTH, WEST} from "../RoverState";

export class CommandRight{
    static execute(roverState: RoverState) {
        if (roverState.isFacing(EAST))      { roverState.turnToSouth(); }
        else if (roverState.isFacing(SOUTH)) { roverState.turnToWest(); }
        else if (roverState.isFacing(WEST)) { roverState.turnToNorth(); }
        else if (roverState.isFacing(NORTH)) { roverState.turnToEast() }
    }
}