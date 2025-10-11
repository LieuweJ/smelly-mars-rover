import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../Factories/VehicleStateFactory";
import {Command, COMMAND_MOVE} from "../../Factories/CommandsFactory";

export class CommandMove implements CommandStrategy {
    shouldExecute(command: Command): boolean {
        return command === COMMAND_MOVE
    }

    execute(vehicleState: VehicleState) {
        if (vehicleState.isFacing(EAST)) {
            vehicleState.moveOneEast();
        }
        if (vehicleState.isFacing(SOUTH)) {
            vehicleState.moveOneSouth();
        }
        if (vehicleState.isFacing(WEST)) {
            vehicleState.moveOneWest();
        }
        if (vehicleState.isFacing(NORTH)) {
            vehicleState.moveOneNorth();
        }
    }
}