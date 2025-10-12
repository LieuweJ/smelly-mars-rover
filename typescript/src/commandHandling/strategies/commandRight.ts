import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../Factories/RoverStateFactory";
import {Command, COMMAND_TURN_RIGHT} from "../../Factories/VehicleCommandsFactory";

export class CommandRight implements CommandStrategy {
    shouldExecute(command: Command): boolean {
        return command === COMMAND_TURN_RIGHT
    }

    execute(vehicleState: VehicleState) {
        if (vehicleState.isFacing(EAST)) {
            vehicleState.turnTo(SOUTH);

            return;
        }

        if (vehicleState.isFacing(SOUTH)) {
            vehicleState.turnTo(WEST);

            return;
        }

        if (vehicleState.isFacing(WEST)) {
            vehicleState.turnTo(NORTH);

            return;
        }

        if (vehicleState.isFacing(NORTH)) {
            vehicleState.turnTo(EAST);

            return;
        }
    }
}