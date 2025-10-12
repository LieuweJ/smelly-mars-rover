import {CommandsHandler, ICommandsHandler} from "./commandHandling/commandsHandler";
import {CommandsFactory, ToRoverSupportedCommandsFactory} from "./Factories/ToRoverSupportedCommandsFactory";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandForward} from "./commandHandling/strategies/commandForward";
import {
    VehicleState,
    ToRoverSupportedStateFactory, VehicleStateFactory
} from "./Factories/ToRoverSupportedStateFactory";

interface VehicleController {
    go(commands: string): void;

    pos(): string;
}

export class Rover implements VehicleController {
    private readonly vehicleState: VehicleState

    constructor(
        initState: string = '',
        initStateFactory: VehicleStateFactory<string> = new ToRoverSupportedStateFactory(),
        private readonly commandsFactory: CommandsFactory<string> = new ToRoverSupportedCommandsFactory(),
        private readonly commandsHandler: ICommandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandForward()]),
    ) {
        this.vehicleState = initStateFactory.create(initState);
    }

    public go(commands: string): void {
        this.commandsHandler.handle(
            this.commandsFactory.create(commands),
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