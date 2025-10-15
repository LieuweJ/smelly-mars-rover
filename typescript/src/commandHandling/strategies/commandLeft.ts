import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, WEST} from "../../Factories/RoverStateFactory";
import {Command, COMMAND_TURN_LEFT} from "../../Factories/VehicleCommandsFactory";
import {TurnStrategy} from "./TurnStrategy";

export class CommandLeft extends TurnStrategy implements CommandStrategy {
    constructor() {
        super(
            new Map([
                [EAST, NORTH],
                [NORTH, WEST],
                [WEST, SOUTH],
                [SOUTH, EAST],
            ])
        )
    };

    shouldExecute(command: Command): boolean {
        return command === COMMAND_TURN_LEFT
    }

}