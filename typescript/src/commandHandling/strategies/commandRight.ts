import {EAST, NORTH, RoverState, SOUTH, WEST} from "../../RoverState";
import {COMMAND, COMMAND_TURN_RIGHT, CommandStrategy} from "../commandsHandler";

export class CommandRight implements CommandStrategy {
    shouldExecute(command: COMMAND): boolean {
        return command === COMMAND_TURN_RIGHT
    }

    execute(roverState: RoverState) {
        if (roverState.isFacing(EAST)) {
            roverState.turnToSouth();
        } else if (roverState.isFacing(SOUTH)) {
            roverState.turnToWest();
        } else if (roverState.isFacing(WEST)) {
            roverState.turnToNorth();
        } else if (roverState.isFacing(NORTH)) {
            roverState.turnToEast()
        }
    }
}