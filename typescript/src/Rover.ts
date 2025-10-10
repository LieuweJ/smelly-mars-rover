import {RoverState} from "./RoverState";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandMove} from "./commandHandling/strategies/commandMove";
import {CommandsHandler} from "./commandHandling/commandsHandler";
import {CommandsFactory} from "./Factories/CommandsFactory";
import {RoverStateFactory} from "./Factories/RoverStateFactory";

export class Rover {
    private roverState: RoverState;
    private commandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMove()])

    constructor(initPosition: string = "") {
        this.roverState = RoverStateFactory.create(initPosition);
    }

    public go(commands: string): void {
        this.commandsHandler.handle(
            CommandsFactory.fromString(commands),
            this.roverState
        );
    }

    public G(commands: string): void {
        // techDebt: Should Rover.G also be able to handle empty string? (See: ticketNumber 124)
        if (!commands[0]) {
            throw new Error('Cannot read properties of undefined (reading \'length\')')
        }

        this.go(commands[0]);
    }

    public get XYD(): string {
        // techDebt: logging is part of techDebt analysis point 1 (See: ticketNumber 123)
        console.log('XYD called');
        return this.roverState.printCurrentPosition()
    }

    public pos(): string {
        // techDebt: logging is part of techDebt analysis point 1 (ticketNumber 123)
        console.log('Pos called');
        return this.roverState.printCurrentPosition()
    }
}