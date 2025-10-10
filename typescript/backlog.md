To Do:
Readablilty:

Responsibility:

Refine abstractions:

- move commandHandling to separate class to handle commandProcessInterfaces.

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

Not doing:

- add README with docs (already in main root of project)
