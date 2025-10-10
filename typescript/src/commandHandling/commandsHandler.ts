import {RoverState} from "../RoverState";

export enum COMMAND {
    R = "R",
    L = "L",
    M = "M"
}

export const COMMAND_TURN_RIGHT = COMMAND.R;
export const COMMAND_MOVE = COMMAND.M;
export const COMMAND_TURN_LEFT = COMMAND.L;

export type CommandStrategy = {
    shouldExecute: (command: string) => boolean;
    execute: (roverState: RoverState) => void;
}

export class CommandsHandler {
    private readonly commandStrategies: CommandStrategy[];

    constructor(commandStrategies: CommandStrategy[]) {
        this.commandStrategies = commandStrategies;
    }

    handle(commands: COMMAND[], roverStates: RoverState[]) {
        for (const command of commands) {
            this.handleCommand(command, roverStates);
        }
    }

    private handleCommand(command: COMMAND, roverStates: RoverState[]) {
        for (const strategy of this.commandStrategies) {
            if (strategy.shouldExecute(command)) {
                this.instructRovers(strategy, roverStates);

                break;
            }
        }
    }

    private instructRovers(strategy: CommandStrategy, roverStates: RoverState[]) {
        for (const roverState of roverStates) {
            strategy.execute(roverState)
        }
    }
}