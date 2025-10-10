To Do:
Readablilty:

Responsibility:

Refine abstractions:

Doing:

Done:

- add coverage script
- add test for rover.G
- add test for rover constructor
- move code in classes, remove unused comments.
- Rename coordinates in roverState
- Rename direction in roverState
- Rename command params in rover.go
- Rename params in rover.constructor
- Use Enum for coordinates
- Use Enum for commands
- rename rover.rs to rover.roverState
- Move setting and getting rover position to RoverState
- Move set turning roverState to roverState
- move 'get current frontFacing' to roverState
- changed param G.z to G.commands
- move get position to Rover
- Added techDebt.md
- Added logging of usage.
- Move commandLeft handling to separate class with commandProcessInterface
- Move commandRight handling to separate class with commandProcessInterface
- Move commandForward handling to separate class with commandProcessInterface
- rename comand_left and command_right to command_turn_left/right
- Move check 'should' execute command Left to commandLeft class
- Move check 'should' execute command Right to commandRight class
- Move check 'should' execute command Move to commandForward class
- move commandHandling to separate class to handle commandProcessInterfaces.
- move setting roverState in rover.construction should move its responsibilities to Rover.
- cleanup
- Removed type command checking in handler to allow easier adding of new commands.
- Removed logic duplication in Rover class.
- Moved responsibility for valid "init inputs" to RoverState class.
- ----- State after 3 hours
- Make commandsHandler only work with a list of Commands.
- Restore old behaviour: If Rover.constructor gets less than 3 params, it should generate rover in default position
- Move initialPosition of RoverState mapping to Factory
- Move 'create initialPosition' to Factory class.
- Add support for multiple rovers handling the same command list.
- Add support for different RoverStateInterfaces
- Introduce VehicleState interface, so commandHandler can work with different vehicles.
- Map string char to Command via Map.
- Map string char to Direction via Map.
- Changed const DIRECTIONS to enum Directions
- Cleanup.
- ----- State after 4 hours

Not doing:

- add README with docs (already in main root of project)
