import {Command, COMMAND_MOVE, COMMAND_TURN_LEFT, COMMAND_TURN_RIGHT} from "../commandHandling/commandsHandler";

const stringToCommandMap: { [key: string]: Command } = {
    [COMMAND_TURN_LEFT]: Command.L,
    [COMMAND_TURN_RIGHT]: Command.R,
    [COMMAND_MOVE]: Command.M,
};

export type ICommandsFactory = {
    fromString: (input: string) => Command[];
}

export class CommandsFactory implements ICommandsFactory {
    fromString(input: string): Command[] {
        const commands: Command[] = []

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