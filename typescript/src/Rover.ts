import {RoverState} from "./RoverState";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandMove} from "./commandHandling/strategies/commandMove";
import {CommandsHandler} from "./commandHandling/commandsHandler";

export class Rover {
    private roverState: RoverState = new RoverState();
    private commandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMove()])

    constructor(initCommand: string = "") {
        const initParams = initCommand.split(" ");
        if (initParams.length >= 3) {
            this.roverState.eastWest = parseInt(initParams[0], 10);
            this.roverState.northSouth = parseInt(initParams[1], 10);
            this.roverState.frontFacing = initParams[2][0];
        }
    }

    public go(commands: string): void {
        this.commandsHandler.handle(commands, this.roverState);
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