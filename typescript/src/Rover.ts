import { RoverState } from "./RoverState";
  
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
        if (command === "L") {
          if (this.rs.frontFacing === "E")      { this.rs.frontFacing = "N"; }
          else if (this.rs.frontFacing === "N") { this.rs.frontFacing = "W"; }
          else if (this.rs.frontFacing === "W") { this.rs.frontFacing = "S"; }
          else if (this.rs.frontFacing === "S") { this.rs.frontFacing = "E"; }
        } else if (command === "R") {
          if (this.rs.frontFacing === "E")      { this.rs.frontFacing = "S"; }
          else if (this.rs.frontFacing === "S") { this.rs.frontFacing = "W"; }
          else if (this.rs.frontFacing === "W") { this.rs.frontFacing = "N"; }
          else if (this.rs.frontFacing === "N") { this.rs.frontFacing = "E"; }
        } else if (command === "M") {
          if (this.rs.frontFacing === "E")      { this.rs.eastWest++; }
          if (this.rs.frontFacing === "S")      { this.rs.northSouth--; }
          if (this.rs.frontFacing === "W")      { this.rs.eastWest--; }
          if (this.rs.frontFacing === "N")      { this.rs.northSouth++; }
        }
      }
    }

    // method not covered by tests.
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