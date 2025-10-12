import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../Factories/StringToRoverStateFactory";
import {Command, COMMAND_TURN_RIGHT} from "../../Factories/StringToCommandsFactory";

export class CommandRight implements CommandStrategy {
    shouldExecute(command: Command): boolean {
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