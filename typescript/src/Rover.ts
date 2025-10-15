import {CommandsHandler} from "./commandHandling/commandsHandler";
import {VehicleCommandsFactory} from "./Factories/VehicleCommandsFactory";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandForward} from "./commandHandling/strategies/commandForward";
import {RoverStateFactory} from "./Factories/RoverStateFactory";
import {RoverController} from "./controllers/roverController";

/**
 * @deprecated This class is deprecated.
 * Use `RoverController` instead for better performance and maintainability.
 */
export class Rover extends RoverController {
    constructor(initState: string = '') {
        console.warn('Rover class is deprecated. Use RoverController for better performance and maintainability. See ticket 123.');
        const initStateFactory = new RoverStateFactory();
        super(initStateFactory.create(initState), new VehicleCommandsFactory(), new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandForward()]));
    }

    /**
     * @deprecated This method is deprecated.
     * Use `RoverController::go` instead.
     */
    public G(commands: string): void {
        console.warn('Rover.G method is deprecated. Use RoverController::go instead. RoverController::go("") (empty string) will not throw an error.');
        if (!commands[0]) {
            throw new Error('Cannot read properties of undefined (reading \'length\')')
        }

        this.go(commands[0]);
    }

    /**
     * @deprecated This method is deprecated.
     * Use `RoverController::getPosition` instead.
     */
    public get XYD(): string {
        console.warn('Rover.XYD method is deprecated. Use RoverController::getPosition instead. See ticket 123.');
        return this.getPosition()
    }

    /**
     * @deprecated This method is deprecated.
     * Use `RoverController::getPosition` instead.
     */
    public pos(): string {
        // techDebt: logging is part of techDebt analysis point 1 (ticketNumber 123)
        console.warn('Rover.pos method is deprecated. Use RoverController::getPosition instead. See ticket 123.');
        return this.getPosition()
    }
}