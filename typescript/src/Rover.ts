import {VehicleState} from "./RoverState";
import {ICommandsHandler} from "./commandHandling/commandsHandler";
import {ICommandsFactory} from "./Factories/CommandsFactory";

export class Rover {
    constructor(
        private readonly commandsHandler: ICommandsHandler,
        private readonly commandsFactory: ICommandsFactory,
        private readonly roverState: VehicleState,
    ) {

    }

    public go(commands: string): void {
        this.commandsHandler.handle(
            this.commandsFactory.fromString(commands),
            [this.roverState]
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