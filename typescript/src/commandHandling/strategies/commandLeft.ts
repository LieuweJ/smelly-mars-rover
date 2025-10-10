import {EAST, NORTH, VehicleState, SOUTH, WEST} from "../../RoverState";
import {COMMAND_TURN_LEFT, CommandStrategy} from "../commandsHandler";


export class CommandLeft implements CommandStrategy {
    shouldExecute(command: string): boolean {
        return command === COMMAND_TURN_LEFT
    }

    execute(roverState: VehicleState) {
        if (roverState.isFacing(EAST)) {
            roverState.turnToNorth();
            return;
        }

        if (roverState.isFacing(NORTH)) {
            roverState.turnToWest();
            return;
        }

        if (roverState.isFacing(WEST)) {
            roverState.turnToSouth();

            return;
        }

        if (roverState.isFacing(SOUTH)) {
            roverState.turnToEast();

            return;
        }
    }
}