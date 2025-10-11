import {VehicleState} from "../RoverState";

export enum Command {
    R = "R",
    L = "L",
    M = "M"
}

export const COMMAND_TURN_RIGHT = Command.R;
export const COMMAND_MOVE = Command.M;
export const COMMAND_TURN_LEFT = Command.L;

export type CommandStrategy = {
    shouldExecute: (command: string) => boolean;
    execute: (roverState: VehicleState) => void;
}

export type ICommandsHandler = {
    handle: (commands: Command[], roverStates: VehicleState[]) => void
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
                this.instructRovers(strategy, vehicleStates);

                break;
            }
        }
    }

    private instructRovers(strategy: CommandStrategy, vehicleStates: VehicleState[]) {
        for (const vehicleState of vehicleStates) {
            strategy.execute(vehicleState)
        }
    }
}