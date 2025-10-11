import {EAST, NORTH, VehicleState, SOUTH, WEST} from "../../RoverState";
import {COMMAND_MOVE, CommandStrategy} from "../commandsHandler";

export class CommandMove implements CommandStrategy {
    shouldExecute(command: string): boolean {
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