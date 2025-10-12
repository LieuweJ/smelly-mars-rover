import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../Factories/ToRoverSupportedStateFactory";
import {Command, COMMAND_TURN_LEFT} from "../../Factories/ToRoverSupportedCommandsFactory";

export class CommandLeft implements CommandStrategy {
    shouldExecute(command: Command): boolean {
        return command === COMMAND_TURN_LEFT
    }

    execute(vehicleState: VehicleState) {
        if (vehicleState.isFacing(EAST)) {
            vehicleState.turnTo(NORTH);

            return;
        }

        if (vehicleState.isFacing(NORTH)) {
            vehicleState.turnTo(WEST);

            return;
        }

        if (vehicleState.isFacing(WEST)) {
            vehicleState.turnTo(SOUTH);

            return;
        }

        if (vehicleState.isFacing(SOUTH)) {
            vehicleState.turnTo(EAST);

            return;
        }
    }
}