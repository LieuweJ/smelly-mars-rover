import {COMMAND_LEFT, COMMAND_MOVE, COMMAND_RIGHT, EAST, NORTH, RoverState, SOUTH, WEST} from "./RoverState";

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
          if (this.roverState.frontFacing === EAST)      { this.roverState.frontFacing = NORTH; }
          else if (this.roverState.frontFacing === NORTH) { this.roverState.frontFacing = WEST; }
          else if (this.roverState.frontFacing === WEST) { this.roverState.frontFacing = SOUTH; }
          else if (this.roverState.frontFacing === SOUTH) { this.roverState.frontFacing = EAST; }
        } else if (command === COMMAND_RIGHT) {
          if (this.roverState.frontFacing === EAST)      { this.roverState.frontFacing = SOUTH; }
          else if (this.roverState.frontFacing === SOUTH) { this.roverState.frontFacing = WEST; }
          else if (this.roverState.frontFacing === WEST) { this.roverState.frontFacing = NORTH; }
          else if (this.roverState.frontFacing === NORTH) { this.roverState.frontFacing = EAST; }
        } else if (command === COMMAND_MOVE) {
          if (this.roverState.frontFacing === EAST)      { this.roverState.moveOneEast(); }
          if (this.roverState.frontFacing === SOUTH)      { this.roverState.moveOneSouth(); }
          if (this.roverState.frontFacing === WEST)      { this.roverState.moveOneWest(); }
          if (this.roverState.frontFacing === NORTH)      { this.roverState.moveOneNorth(); }
        }
      }
    }

    public G(z: string): void {
      this.go(z[0]);
    }
  
    public get XYD(): string {
      return `${this.roverState.eastWest} ${this.roverState.northSouth} ${this.roverState.frontFacing}`;
    }

    public pos(): string {
      return this.XYD;
    }
  }