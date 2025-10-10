import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../RoverState";
import {COMMAND_TURN_RIGHT, CommandStrategy} from "../commandsHandler";

export class CommandRight implements CommandStrategy {
    shouldExecute(command: string): boolean {
        return command === COMMAND_TURN_RIGHT
    }

    execute(roverState: VehicleState) {
        if (roverState.isFacing(EAST)) {
            roverState.turnToSouth();
            return;
        }

        if (roverState.isFacing(SOUTH)) {
            roverState.turnToWest();
            return;
        }

        if (roverState.isFacing(WEST)) {
            roverState.turnToNorth();
            return;

        }

        if (roverState.isFacing(NORTH)) {
            roverState.turnToEast()
            return;
        }
    }
}