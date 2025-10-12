import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, VehicleState, WEST} from "../../Factories/ToRoverSupportedStateFactory";
import {Command, COMMAND_MOVE} from "../../Factories/ToRoverSupportedCommandsFactory";

export class CommandForward implements CommandStrategy {
    constructor(private readonly distance: number = 1) {
    }

    shouldExecute(command: Command): boolean {
        return command === COMMAND_MOVE
    }

    execute(vehicleState: VehicleState) {
        if (vehicleState.isFacing(EAST)) {
            vehicleState.moveEastBy(this.distance);
        }

        if (vehicleState.isFacing(SOUTH)) {
            vehicleState.moveSouthBy(this.distance);
        }

        if (vehicleState.isFacing(WEST)) {
            vehicleState.moveWestBy(this.distance);
        }

        if (vehicleState.isFacing(NORTH)) {
            vehicleState.moveNorthBy(this.distance);
        }
    }
}