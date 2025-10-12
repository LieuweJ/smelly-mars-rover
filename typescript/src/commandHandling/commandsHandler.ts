import {VehicleState} from "../Factories/RoverStateFactory";
import {Command} from "../Factories/VehicleCommandsFactory";

export type CommandStrategy = {
    shouldExecute: (command: Command) => boolean;
    execute: (vehicleState: VehicleState) => void;
}

export type ICommandsHandler = {
    handle: (commands: Command[], vehicleStates: VehicleState[]) => void
}

export class CommandsHandler implements ICommandsHandler {

    constructor(private readonly commandStrategies: CommandStrategy[]) {
    }

    handle(commands: Command[], vehicleStates: VehicleState[]) {
        for (const command of commands) {
            this.handleCommand(command, vehicleStates);
        }
    }

    private handleCommand(command: Command, vehicleStates: VehicleState[]) {
        for (const strategy of this.commandStrategies) {
            if (strategy.shouldExecute(command)) {
                this.instructVehicles(strategy, vehicleStates);

                break;
            }
        }
    }

    private instructVehicles(strategy: CommandStrategy, vehicleStates: VehicleState[]) {
        for (const vehicleState of vehicleStates) {
            strategy.execute(vehicleState)
        }
    }
}