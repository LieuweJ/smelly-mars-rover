import {COMMAND, COMMAND_MOVE, COMMAND_TURN_LEFT, COMMAND_TURN_RIGHT} from "../commandHandling/commandsHandler";

export class CommandsFactory {
    static fromString(input: string): COMMAND[] {
        const commands: COMMAND[] = []

        const chars = input.split('');
        for (let i = 0; i < chars.length; i++) {
            const char = chars[i];

            switch (char) {
                case COMMAND_TURN_LEFT:
                    commands.push(COMMAND.L);
                    break;
                case COMMAND_TURN_RIGHT:
                    commands.push(COMMAND.R);
                    break;
                case COMMAND_MOVE:
                    commands.push(COMMAND.M);
                    break;
                default:
            }
        }

        return commands;
    }

}