import {Direction, RoverState} from "./RoverState";
import {CommandLeft} from "./commandHandling/strategies/commandLeft";
import {CommandRight} from "./commandHandling/strategies/commandRight";
import {CommandMove} from "./commandHandling/strategies/commandMove";
import {CommandsHandler} from "./commandHandling/commandsHandler";
import {StringToCommandsHandler} from "./commandHandling/stringToCommands";

export class Rover {
    private roverState: RoverState;
    private commandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMove()])

    constructor(initPosition: string = "") {
        const startingPositions = initPosition.split(" ");

        if (startingPositions.length < 3) {
            console.log('hier', startingPositions)
            this.roverState = new RoverState();

            return;
        }

        console.log('daar', startingPositions)

        this.roverState = new RoverState(
            this.mapToCoordinate(startingPositions[0]),
            this.mapToCoordinate(startingPositions[1]),
            this.mapToDirection(startingPositions[2])
        )
    }

    private mapToCoordinate(possibleCoordinate: string): number | undefined {
        const coordinate = parseInt(possibleCoordinate, 10);

        if (RoverState.isValidCoordinate(coordinate)) {
            return coordinate
        }
    }

    private mapToDirection(possibleDirection: string): Direction | undefined {
        if (RoverState.isValidDirection(possibleDirection)) {
            return possibleDirection
        }
    }

    public go(commands: string): void {
        this.commandsHandler.handle(
            StringToCommandsHandler.parse(commands),
            this.roverState
        );
    }

    public G(commands: string): void {
        // techDebt: Should Rover.G also empty string? (ticketNumber 124)
        if (!commands[0]) {
            throw new Error('Cannot read properties of undefined (reading \'length\')')
        }

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