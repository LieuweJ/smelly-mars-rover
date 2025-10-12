import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../Factories/RoverStateFactory";
import {Command, COMMAND_MOVE} from "../../Factories/CommandsFactory";

const defaultDistance = 1;

export class CommandMoveOne implements CommandStrategy {
    shouldExecute(command: Command): boolean {
        return command === COMMAND_MOVE
    }

    execute(vehicleState: VehicleState) {
        if (vehicleState.isFacing(EAST)) {
            vehicleState.moveEastBy(defaultDistance);
        }

        if (vehicleState.isFacing(SOUTH)) {
            vehicleState.moveSouthBy(defaultDistance);
        }

        if (vehicleState.isFacing(WEST)) {
            vehicleState.moveWestBy(defaultDistance);
        }

        if (vehicleState.isFacing(NORTH)) {
            vehicleState.moveNorthBy(defaultDistance);
        }
    }
}