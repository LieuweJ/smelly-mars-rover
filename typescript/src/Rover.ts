import {CommandsHandler, ICommandsHandler} from "./commandHandling/commandsHandler";
import {CommandsFactory, ICommandsFactory} from "./Factories/CommandsFactory";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandMoveOne} from "./commandHandling/strategies/commandMoveOne";
import {VehicleStateFactory, VehicleState, RoverStateFactory} from "./Factories/RoverStateFactory";

interface VehicleController {
    go(commands: string): void;

    pos(): string;
}

export class Rover implements VehicleController {
    private readonly vehicleState: VehicleState

    constructor(
        initState: string = '',
        initStateFactory: VehicleStateFactory = new RoverStateFactory(),
        private readonly commandsFactory: ICommandsFactory = new CommandsFactory(),
        private readonly commandsHandler: ICommandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMoveOne()]),
    ) {
        this.vehicleState = initStateFactory.create(initState);
    }

    public go(commands: string): void {
        this.commandsHandler.handle(
            this.commandsFactory.fromString(commands),
            [this.vehicleState]
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
        return this.vehicleState.printCurrentPosition()
    }

    public pos(): string {
        // techDebt: logging is part of techDebt analysis point 1 (ticketNumber 123)
        console.log('Pos called');
        return this.vehicleState.printCurrentPosition()
    }
}