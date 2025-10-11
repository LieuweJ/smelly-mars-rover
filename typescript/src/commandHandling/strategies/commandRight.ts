import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../RoverState";
import {COMMAND_TURN_RIGHT, CommandStrategy} from "../commandsHandler";

export class CommandRight implements CommandStrategy {
    shouldExecute(command: string): boolean {
        return command === COMMAND_TURN_RIGHT
    }

    execute(vehicleState: VehicleState) {
        if (vehicleState.isFacing(EAST)) {
            vehicleState.turnToSouth();
            return;
        }

        if (vehicleState.isFacing(SOUTH)) {
            vehicleState.turnToWest();
            return;
        }

        if (vehicleState.isFacing(WEST)) {
            vehicleState.turnToNorth();
            return;

        }

        if (vehicleState.isFacing(NORTH)) {
            vehicleState.turnToEast()
            return;
        }
    }
}