import {Rover} from '../src/Rover';
import {CommandsFactory} from "../src/Factories/CommandsFactory";
import {VehicleStateFactory} from "../src/Factories/VehicleStateFactory";
import {CommandsHandler} from "../src/commandHandling/commandsHandler";
import {CommandLeft} from "../src/commandHandling/strategies/commandLeft";
import {CommandRight} from "../src/commandHandling/strategies/commandRight";
import {CommandMove} from "../src/commandHandling/strategies/commandMove";

describe("MarsRoverShould", () => {
    const commandsHandler = new CommandsHandler([new CommandLeft(), new CommandRight(), new CommandMove()])
    const commandsFactory = new CommandsFactory();
    const vehicleStateFactory = new VehicleStateFactory();

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
            const rover = new Rover(startingPosition);
            rover.go(instructions);
            expect(rover.pos()).toBe(expectedOutput);
        }
    );

    test.each([
        ["1 2 N", "L", "1 2 W"],
        ["1 2 N", "LMLMLMLMM", "1 2 W"],
        ["3 3 E", "MMRMMRMRRM", "4 3 E"]
    ])(
        "When processing one command explicitly, start at '%s', with instructions '%s' => '%s'",
        (startingPosition, instructions, expectedOutput) => {
            const rover = new Rover(startingPosition, vehicleStateFactory, commandsFactory, commandsHandler);
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
        const rover = new Rover('', vehicleStateFactory, commandsFactory, commandsHandler);
        expect(rover.pos()).toBe("0 0 N");
    })

    test('When initialized with parameters, position is set to parameters it initialize with', () => {
        const startingPosition = "4 5 S";
        const rover = new Rover(startingPosition)
        expect(rover.pos()).toBe(startingPosition);
    })

    test('When an invalid command is given, the rover does not move', () => {
        const startingPosition = "1 2 N";
        const rover = new Rover(startingPosition)
        rover.go("X");
        expect(rover.pos()).toBe("1 2 N");
    })

    test('When initing the Rover Class without full initial position, roverState is "0 0 N",', () => {
        const startingPosition = "1 2";
        const rover = new Rover(startingPosition)
        expect(rover.pos()).toBe("0 0 N");
    })

    test('When initing the Rover Class with invalid initial position, roverState is the initial position,', () => {
        const startingPosition = "3 5 S";
        const rover = new Rover(startingPosition)
        expect(rover.pos()).toBe(startingPosition);
    })

    test('Create RoverState without init position', () => {
        const result = new Rover();

        expect(result.pos()).toBe('0 0 N')
    })

    test('VehicleState Factory:createRover can handle empty string', () => {
        const roverState = vehicleStateFactory.createRover();

        expect(roverState.printCurrentPosition()).toBe('0 0 N')
    })
});