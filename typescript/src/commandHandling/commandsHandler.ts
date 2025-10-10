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

    handle(commands: string, roverState: RoverState) {
        for (let i = 0; i < commands.length; i++) {
            const command = commands[i];

            this.handleCommand(command, roverState);
        }
    }

    private handleCommand(command: string, roverState: RoverState) {
        for (const strategy of this.commandStrategies) {
            if (strategy.shouldExecute(command)) {
                strategy.execute(roverState);
                break;
            }
        }
    }
}