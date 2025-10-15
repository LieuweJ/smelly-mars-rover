import {CommandStrategy} from "../commandsHandler";
import {EAST, NORTH, SOUTH, WEST} from "../../Factories/RoverStateFactory";
import {Command, COMMAND_TURN_RIGHT} from "../../Factories/VehicleCommandsFactory";
import {TurnStrategy} from "./TurnStrategy";

export class CommandRight extends TurnStrategy implements CommandStrategy {
    constructor() {
        super(
            new Map([
                [EAST, SOUTH],
                [SOUTH, WEST],
                [WEST, NORTH],
                [NORTH, EAST],
            ])
        )
    }

    shouldExecute(command: Command): boolean {
        return command === COMMAND_TURN_RIGHT
    }
}