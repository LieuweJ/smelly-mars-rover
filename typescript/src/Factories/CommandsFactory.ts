import {COMMAND, COMMAND_MOVE, COMMAND_TURN_LEFT, COMMAND_TURN_RIGHT} from "../commandHandling/commandsHandler";

const stringToCommandMap: { [key: string]: COMMAND } = {
    [COMMAND_TURN_LEFT]: COMMAND.L,
    [COMMAND_TURN_RIGHT]: COMMAND.R,
    [COMMAND_MOVE]: COMMAND.M,
};

export class CommandsFactory {
    static fromString(input: string): COMMAND[] {
        const commands: COMMAND[] = []

        const chars = input.split('');
        for (let i = 0; i < chars.length; i++) {
            const command = stringToCommandMap[chars[i]];

            if (command) {
                commands.push(command);
            }
        }

        return commands;
    }
}