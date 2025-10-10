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
    shouldExecute: (command: COMMAND) => boolean;
    execute: (roverState: RoverState) => void;
}

const INVALID_COMMAND = "Invalid command";

export class CommandsHandler {
    private readonly commandStrategies: CommandStrategy[];

    constructor(commandStrategies: CommandStrategy[]) {
        this.commandStrategies = commandStrategies;
    }

    handle(commands: string, roverState: RoverState) {
        for (let i = 0; i < commands.length; i++) {
            const command = this.getCommand(commands[i]);

            if (command === INVALID_COMMAND) {
                return;
            }

            this.handleCommand(command, roverState);
        }
    }

    private handleCommand(command: COMMAND, roverState: RoverState) {
        for (const strategy of this.commandStrategies) {
            if (strategy.shouldExecute(command)) {
                strategy.execute(roverState);
                break;
            }
        }
    }

    private getCommand(command: string): COMMAND | typeof INVALID_COMMAND {
        if (command !== COMMAND_TURN_LEFT && command !== COMMAND_TURN_RIGHT && command !== COMMAND_MOVE) {
            return INVALID_COMMAND
        }

        return command as COMMAND;
    }

}