import {CommandStrategy} from "../commandsHandler";
import {VehicleState} from "../../Factories/ToRoverStateFactory";
import {Command, COMMAND_MOVE} from "../../Factories/ToVehicleCommandsFactory";

export class CommandForward implements CommandStrategy {
    constructor(private readonly distance: number = 1) {
    }

    shouldExecute(command: Command): boolean {
        return command === COMMAND_MOVE
    }

    execute(vehicleState: VehicleState) {
        vehicleState.moveIn(vehicleState.getFacingDirection(), this.distance);
    }
}