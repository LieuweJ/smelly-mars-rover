import {EAST, NORTH, RoverState, SOUTH, WEST} from "../../RoverState";
import {COMMAND_MOVE, CommandStrategy} from "../commandsHandler";

export class CommandMove implements CommandStrategy {
    shouldExecute(command: string): boolean {
        return command === COMMAND_MOVE
    }

    execute(roverState: RoverState) {
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