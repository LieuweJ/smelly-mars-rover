import {Direction, VehicleState} from "../../Factories/RoverStateFactory";

export class TurnStrategy {
    constructor(private readonly nextDirection: Map<Direction, Direction>) {
    }

    execute(vehicleState: VehicleState) {
        const nextDirection = this.nextDirection.get(vehicleState.getFacingDirection());
        if (nextDirection) {
            vehicleState.turnTo(nextDirection);
        }
    }
}