import {VehicleState} from "../Factories/RoverStateFactory";
import {CommandsFactory} from "../Factories/VehicleCommandsFactory";
import {ICommandsHandler} from "../commandHandling/commandsHandler";


interface VehicleController {
    go(commands: string): void;

    getPosition(): string;
}

export class RoverController implements VehicleController {
    constructor(
        private readonly vehicleState: VehicleState,
        private readonly commandsFactory: CommandsFactory<string>,
        private readonly commandsHandler: ICommandsHandler
    ) {
    }

    public go(commands: string): void {
        this.commandsHandler.handle(
            this.commandsFactory.create(commands),
            [this.vehicleState]
        );
    }

    public getPosition(): string {
        return this.vehicleState.printCurrentPosition()
    }
}