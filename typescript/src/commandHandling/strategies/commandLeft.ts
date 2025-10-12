import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../Factories/StringToRoverStateFactory";
import {Command, COMMAND_TURN_LEFT} from "../../Factories/StringToCommandsFactory";

export class CommandLeft implements CommandStrategy {
    shouldExecute(command: Command): boolean {
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