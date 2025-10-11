import {EAST, NORTH, VehicleState, SOUTH, WEST} from "../../RoverState";
import {COMMAND_TURN_LEFT, CommandStrategy} from "../commandsHandler";


export class CommandLeft implements CommandStrategy {
    shouldExecute(command: string): boolean {
        return command === COMMAND_TURN_LEFT
    }

    execute(vehicleState: VehicleState) {
        if (vehicleState.isFacing(EAST)) {
            vehicleState.turnToNorth();
            return;
        }

        if (vehicleState.isFacing(NORTH)) {
            vehicleState.turnToWest();
            return;
        }

        if (vehicleState.isFacing(WEST)) {
            vehicleState.turnToSouth();

            return;
        }

        if (vehicleState.isFacing(SOUTH)) {
            vehicleState.turnToEast();

            return;
        }
    }
}