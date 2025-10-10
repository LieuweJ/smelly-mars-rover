1. analyse which public method should be deprecated: "Rover:XYD" or "Rover:pos"
3. add deprecation warning to deprecated method of 1, and communicate this with stakeholders. See ticket 123
4. Should rover.G also accept empty strings, or should this still throw an error? See ticket: 124

Done:

2. add logging of usage of both methods "Rover:XYD" or "Rover:pos" (see ticket 123).