import {EAST, NORTH, RoverState, SOUTH, WEST} from "../../RoverState";
import {COMMAND_TURN_LEFT, COMMAND, CommandStrategy} from "../commandsHandler";


export class CommandLeft implements CommandStrategy {
    shouldExecute(command: COMMAND): boolean {
        return command === COMMAND_TURN_LEFT
    }

    execute(roverState: RoverState) {
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