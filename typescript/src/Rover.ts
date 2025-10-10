import {COMMAND_LEFT, COMMAND_MOVE, COMMAND_RIGHT, EAST, NORTH, RoverState, SOUTH, WEST} from "./RoverState";

export class Rover {
    private rs: RoverState = new RoverState();
  
    constructor(initCommand: string = "") {
      const initParams = initCommand.split(" ");
      if (initParams.length >= 3) {
        this.rs.eastWest = parseInt(initParams[0], 10);
        this.rs.northSouth = parseInt(initParams[1], 10);
        this.rs.frontFacing = initParams[2][0];
      }
    }
  
    public go(commands: string): void {
      for (let i = 0; i < commands.length; i++) {
        const command = commands[i];

          if (command === COMMAND_LEFT) {
          if (this.rs.frontFacing === EAST)      { this.rs.frontFacing = NORTH; }
          else if (this.rs.frontFacing === NORTH) { this.rs.frontFacing = WEST; }
          else if (this.rs.frontFacing === WEST) { this.rs.frontFacing = SOUTH; }
          else if (this.rs.frontFacing === SOUTH) { this.rs.frontFacing = EAST; }
        } else if (command === COMMAND_RIGHT) {
          if (this.rs.frontFacing === EAST)      { this.rs.frontFacing = SOUTH; }
          else if (this.rs.frontFacing === SOUTH) { this.rs.frontFacing = WEST; }
          else if (this.rs.frontFacing === WEST) { this.rs.frontFacing = NORTH; }
          else if (this.rs.frontFacing === NORTH) { this.rs.frontFacing = EAST; }
        } else if (command === COMMAND_MOVE) {
          if (this.rs.frontFacing === EAST)      { this.rs.eastWest++; }
          if (this.rs.frontFacing === SOUTH)      { this.rs.northSouth--; }
          if (this.rs.frontFacing === WEST)      { this.rs.eastWest--; }
          if (this.rs.frontFacing === NORTH)      { this.rs.northSouth++; }
        }
      }
    }

    public G(z: string): void {
      this.go(z[0]);
    }
  
    public get XYD(): string {
      return `${this.rs.eastWest} ${this.rs.northSouth} ${this.rs.frontFacing}`;
    }

    public pos(): string {
      return this.XYD;
    }
  }