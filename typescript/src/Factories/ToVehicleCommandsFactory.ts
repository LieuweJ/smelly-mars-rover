export enum Command {
    R = "R",
    L = "L",
    M = "M"
}

export const COMMAND_TURN_RIGHT = Command.R;
export const COMMAND_MOVE = Command.M;
export const COMMAND_TURN_LEFT = Command.L;

const stringToCommandMap: { [key: string]: Command } = {
    [COMMAND_TURN_LEFT]: Command.L,
    [COMMAND_TURN_RIGHT]: Command.R,
    [COMMAND_MOVE]: Command.M,
};

export type CommandsFactory<T> = {
    create: (input: T) => Command[];
}

export class ToVehicleCommandsFactory implements CommandsFactory<string> {
    create(input: string): Command[] {
        const commands: Command[] = []

        for (let i = 0; i < input.length; i++) {
            const command = stringToCommandMap[input[i]];

            if (command) {
                commands.push(command);
            }
        }

        return commands;
    }
}