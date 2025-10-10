import {
    COMMAND_TURN_LEFT,
    COMMAND_MOVE,
    COMMAND_TURN_RIGHT,
    EAST,
    NORTH,
    RoverState,
    SOUTH,
    WEST,
    COMMAND
} from "./RoverState";
import {CommandLeft} from "./commandStrategies/commandLeft";
import {CommandRight} from "./commandStrategies/commandRight";
import {CommandMove} from "./commandStrategies/commandMove";

const INVALID_COMMAND = "Invalid command";

export class Rover {
    private roverState: RoverState = new RoverState();

    constructor(initCommand: string = "") {
        const initParams = initCommand.split(" ");
        if (initParams.length >= 3) {
            this.roverState.eastWest = parseInt(initParams[0], 10);
            this.roverState.northSouth = parseInt(initParams[1], 10);
            this.roverState.frontFacing = initParams[2][0];
        }
    }

    public go(commands: string): void {
        for (let i = 0; i < commands.length; i++) {
            const command = this.getCommand(commands[i]);
            if (command === INVALID_COMMAND) {
                return;
            }

            if (CommandLeft.shouldExecute(command)) {
                CommandLeft.execute(this.roverState)
            } else if (CommandRight.shouldExecute(command)) {
                CommandRight.execute(this.roverState)
            } else if (command === COMMAND_MOVE) {
                CommandMove.execute(this.roverState)
            }
        }
    }

    private getCommand(command: string): COMMAND | typeof INVALID_COMMAND {
        if (command !== COMMAND_TURN_LEFT && command !== COMMAND_TURN_RIGHT && command !== COMMAND_MOVE) {
            return INVALID_COMMAND
        }

        return command as COMMAND;
    }

    public G(commands: string): void {
        this.go(commands[0]);
    }

    public get XYD(): string {
        // logging is part of techDebt analysis point 1 (ticketNumber 123)
        console.log('XYD called');
        return this.roverState.printCurrentPosition()
    }

    public pos(): string {
        // logging is part of techDebt analysis point 1 (ticketNumber 123)
        console.log('Pos called');
        return this.roverState.printCurrentPosition()
    }
}