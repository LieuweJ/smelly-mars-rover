import {Rover} from '../src/Rover';
import {RoverStateFactory} from "../src/Factories/RoverStateFactory";
import {Direction} from "node:tty";
import {RoverController} from "../src/controllers/roverController";
import {VehicleCommandsFactory} from "../src/Factories/VehicleCommandsFactory";
import {CommandsHandler} from "../src/commandHandling/commandsHandler";
import {CommandLeft} from "../src/commandHandling/strategies/commandLeft";
import {CommandRight} from "../src/commandHandling/strategies/commandRight";
import {CommandForward} from "../src/commandHandling/strategies/commandForward";

describe("MarsRover Should", () => {
    const vehicleStateFactory = new RoverStateFactory();

    test.each([
        ["1 2 N", "", "1 2 N"],
        ["1 2 N", "L", "1 2 W"],
        ["1 2 W", "L", "1 2 S"],
        ["1 2 S", "L", "1 2 E"],
        ["1 2 E", "L", "1 2 N"],
        ["1 2 N", "R", "1 2 E"],
        ["1 2 E", "R", "1 2 S"],
        ["1 2 S", "R", "1 2 W"],
        ["1 2 W", "R", "1 2 N"],
        ["1 2 N", "M", "1 3 N"],
        ["1 2 E", "M", "2 2 E"],
        ["1 2 S", "M", "1 1 S"],
        ["1 2 W", "M", "0 2 W"],
        ["1 2 N", "LMLMLMLMM", "1 3 N"],
        ["3 3 E", "MMRMMRMRRM", "5 1 E"]
    ])(
        "start at '%s', with instructions '%s' => '%s'",
        (startingPosition, instructions, expectedOutput) => {
            const rover = createRoverController(startingPosition);
            rover.go(instructions);
            expect(rover.getPosition()).toBe(expectedOutput);
        }
    );

    test.each([
        ["1 2 N", "L", "1 2 W"],
        ["1 2 N", "LMLMLMLMM", "1 2 W"],
        ["3 3 E", "MMRMMRMRRM", "4 3 E"]
    ])(
        "When processing one command explicitly, start at '%s', with instructions '%s' => '%s'",
        (startingPosition, instructions, expectedOutput) => {
            const rover = new Rover(startingPosition);
            rover.G(instructions);
            expect(rover.pos()).toBe(expectedOutput);
            expect(rover.XYD).toBe(expectedOutput);
        }
    );

    test.each([
        ["1 2 N", ""],
    ])(
        "When processing one command explicitly, if no command is given: throw error",
        (startingPosition, instructions) => {
            const expectedOutput = new Error('Cannot read properties of undefined (reading \'length\')')
            const rover = new Rover(startingPosition);
            expect(() => rover.G(instructions)).toThrow(expectedOutput);
        }
    );

    test('When initialized with no parameters, position is "0 0 N"', () => {
        const rover = createRoverController('');
        expect(rover.getPosition()).toBe("0 0 N");
    })

    test('When initialized with parameters, position is set to parameters it initialize with', () => {
        const startingPosition = "4 5 S";
        const rover = createRoverController(startingPosition)
        expect(rover.getPosition()).toBe(startingPosition);
    })

    test('When an invalid command is given, the rover does not move', () => {
        const startingPosition = "1 2 N";
        const rover = createRoverController(startingPosition)
        rover.go("X");
        expect(rover.getPosition()).toBe("1 2 N");
    })

    test('When initing the Rover Class without full initial position, roverState is "0 0 N",', () => {
        const startingPosition = "1 2";
        const rover = createRoverController(startingPosition)
        expect(rover.getPosition()).toBe("0 0 N");
    })

    test('When initing the Rover Class with invalid initial position, roverState is the initial position,', () => {
        const startingPosition = "3 5 S";
        const rover = createRoverController(startingPosition)
        expect(rover.getPosition()).toBe(startingPosition);
    })

    test('Create RoverState without init position', () => {
        const result = new Rover();

        expect(result.pos()).toBe('0 0 N')
    })

    test('VehicleState Factory:createRover can handle empty string', () => {
        const roverState = vehicleStateFactory.create();

        expect(roverState.printCurrentPosition()).toBe('0 0 N')
    })

    test('RoverState does not move when being asked to move to a direction RoverState does not know.', () => {
        const roverState = vehicleStateFactory.create("1 2 N");

        // not existing direction for testing purposes
        // @ts-ignore
        roverState.moveIn("X" as unknown as Direction, 3);
        expect(roverState.printCurrentPosition()).toBe('1 2 N')
    })
});

function createRoverController(startingPosition: string): RoverController {
    const initStateFactory = new RoverStateFactory();

    return new RoverController(
        initStateFactory.create(startingPosition),
        new VehicleCommandsFactory(),
        new CommandsHandler([
            new CommandLeft(),
            new CommandRight(),
            new CommandForward()
        ])
    );
}