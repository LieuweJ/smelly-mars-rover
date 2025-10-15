import {Rover} from '../src/Rover';
import {RoverStateFactory} from "../src/Factories/RoverStateFactory";
import {Direction} from "node:tty";
import {RoverController} from "../src/controllers/roverController";
import {VehicleCommandsFactory} from "../src/Factories/VehicleCommandsFactory";
import {CommandsHandler} from "../src/commandHandling/commandsHandler";
import {CommandLeft} from "../src/commandHandling/strategies/commandLeft";
import {CommandRight} from "../src/commandHandling/strategies/commandRight";
import {CommandForward} from "../src/commandHandling/strategies/commandForward";

describe("Deprecated Rover class should", () => {
    test.each([
        ["1 2 N", "L", "1 2 W"],
        ["1 2 N", "LMLMLMLMM", "1 2 W"],
        ["3 3 E", "MMRMMRMRRM", "4 3 E"]
    ])(
        "When processing one command explicitly, start at '%s', with instructions '%s' => '%s'",
        (startingPosition, instructions, expectedOutput) => {
            // keep tests for deprecated Rover class until we remove it.
            // @ts-ignore
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
            // keep tests for deprecated Rover class until we remove it.
            // @ts-ignore
            const rover = new Rover(startingPosition);

            // keep tests for deprecated Rover class until we remove it.
            // @ts-ignore
            expect(() => rover.G(instructions)).toThrow(expectedOutput);
        }
    );

    test('Create RoverState without init position', () => {
        // keep tests for deprecated Rover class until we remove it.
        // @ts-ignore
        const result = new Rover();

        expect(result.pos()).toBe('0 0 N')
    })

});