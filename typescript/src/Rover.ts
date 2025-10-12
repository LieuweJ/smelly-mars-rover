import {CommandsHandler, ICommandsHandler} from "./commandHandling/commandsHandler";
import {CommandsFactory, StringToCommandsFactory} from "./Factories/StringToCommandsFactory";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandMoveOne} from "./commandHandling/strategies/commandMoveOne";
import {
    VehicleState,
    StringToRoverStateFactory, VehicleStateFactory
} from "./Factories/StringToRoverStateFactory";

interface VehicleController {
    go(commands: string): void;

    pos(): string;
}

export class Rover implements VehicleController {
    private readonly vehicleState: VehicleState

    constructor(
        initState: string = '',
        initStateFactory: VehicleStateFactory<string> = new StringToRoverStateFactory(),
        private readonly commandsFactory: CommandsFactory<string> = new StringToCommandsFactory(),
        private readonly commandsHandler: ICommandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMoveOne()]),
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