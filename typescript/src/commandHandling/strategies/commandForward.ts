import {CommandStrategy} from "../commandsHandler";
import {VehicleState} from "../../Factories/ToRoverSupportedStateFactory";
import {Command, COMMAND_MOVE} from "../../Factories/ToRoverSupportedCommandsFactory";

export class CommandForward implements CommandStrategy {
    constructor(private readonly distance: number = 1) {
    }

    shouldExecute(command: Command): boolean {
        return command === COMMAND_MOVE
    }

    execute(vehicleState: VehicleState) {
        vehicleState.move(vehicleState.getFacingDirection(), this.distance);
    }
}