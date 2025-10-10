import {COMMAND_LEFT, COMMAND_MOVE, COMMAND_RIGHT, EAST, NORTH, RoverState, SOUTH, WEST} from "./RoverState";
import {CommandLeft} from "./commandStrategies/commandLeft";

export class Rover {
    private roverState: RoverState = new RoverState();
  
    constructor(initCommand: string = "") {
      const initParams = initCommand.split(" ");
      if (initParams.length >= 3) {
        this.roverState.eastWest = parseInt(initParams[0], 10);
        this.roverState.northSouth = parseInt(initParams[1], 10);
        this.roverState.frontFacing = initParams[2][0];
      }
    }
  
    public go(commands: string): void {
      for (let i = 0; i < commands.length; i++) {
        const command = commands[i];

          if (command === COMMAND_LEFT) {
              CommandLeft.execute(this.roverState)
          } else if (command === COMMAND_RIGHT) {
          if (this.roverState.isFacing(EAST))      { this.roverState.turnToSouth(); }
          else if (this.roverState.isFacing(SOUTH)) { this.roverState.turnToWest(); }
          else if (this.roverState.isFacing(WEST)) { this.roverState.turnToNorth(); }
          else if (this.roverState.isFacing(NORTH)) { this.roverState.turnToEast() }
        } else if (command === COMMAND_MOVE) {
          if (this.roverState.isFacing(EAST))      { this.roverState.moveOneEast(); }
          if (this.roverState.isFacing(SOUTH))      { this.roverState.moveOneSouth(); }
          if (this.roverState.isFacing(WEST))      { this.roverState.moveOneWest(); }
          if (this.roverState.isFacing(NORTH))      { this.roverState.moveOneNorth(); }
        }
      }
    }

    public G(commands: string): void {
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