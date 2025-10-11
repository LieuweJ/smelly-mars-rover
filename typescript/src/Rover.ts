import {VehicleState} from "./RoverState";
import {CommandsHandler, ICommandsHandler} from "./commandHandling/commandsHandler";
import {CommandsFactory, ICommandsFactory} from "./Factories/CommandsFactory";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandMove} from "./commandHandling/strategies/commandMove";
import {IVehicleStateFactory, VehicleStateFactory} from "./Factories/VehicleStateFactory";

export class Rover {
    private readonly roverState: VehicleState

    constructor(
        initState: string = '',
        initStateFactory: IVehicleStateFactory = new VehicleStateFactory(),
        private readonly commandsFactory: ICommandsFactory = new CommandsFactory(),
        private readonly commandsHandler: ICommandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMove()]),
    ) {
        this.roverState = initStateFactory.createRover(initState);
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