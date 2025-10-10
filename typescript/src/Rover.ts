import {Direction, DIRECTIONS, RoverState} from "./RoverState";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandMove} from "./commandHandling/strategies/commandMove";
import {COMMAND, CommandsHandler} from "./commandHandling/commandsHandler";

export class Rover {
    private roverState: RoverState;
    private commandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMove()])

    constructor(initPosition: string = "") {
        const startingPositions = initPosition.split(" ");

        this.roverState = new RoverState(
            this.getEastWestCoordinate(startingPositions[0]),
            this.getNorthSouthCoordinate(startingPositions[1]),
            this.getFacingDirection(startingPositions[2])
        )
    }

    private getEastWestCoordinate(possibleCoordinate: string): number | undefined {
        const possibleEastWest = parseInt(possibleCoordinate, 10);
        if (isNaN(possibleEastWest)) {
            return undefined;
        }

        return parseInt(possibleCoordinate, 10);
    }

    private getNorthSouthCoordinate(possibleCoordinate: string): number | undefined {
        const possibleNorthSouth = parseInt(possibleCoordinate, 10);
        if (isNaN(possibleNorthSouth)) {
            return undefined;
        }

        return parseInt(possibleCoordinate, 10);
    }

    private getFacingDirection(possibleDirection: string): Direction | undefined {
        if (RoverState.isValidDirection(possibleDirection)) {
            return possibleDirection;
        }

        return undefined;
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