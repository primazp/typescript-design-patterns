/**
* The state pattern, which closely resembles Strategy Pattern, is a behavioral software design
* pattern, also known as the objects for states pattern. This pattern is used in computer 
* programming to encapsulate varying behavior for the same object based on its internal state.
* This can be a cleaner way for an object to change its behavior at runtime without resorting to
* large monolithic conditional statements and thus improve maintainability.
*/

enum VehicleState {
    PARKED,
    IDLING,
    FIRST_GEAR
}

class Vehicle {
  private state: VehicleState = VehicleState.PARKED;

  public ignite() {
    if (this.state == VehicleState.PARKED) {
      this.state = VehicleState.IDLING;
    } else throw Error()
  }

  public shift_up() {
    if (this.state == VehicleState.IDLING) {
      this.state = VehicleState.FIRST_GEAR;
    } else throw Error()
  }

  public shift_down() {
    if (this.state == VehicleState.FIRST_GEAR) {
      this.state = VehicleState.IDLING;
    } else throw Error()
  }

  public park() {
    if (this.state == VehicleState.IDLING) {
      this.state = VehicleState.PARKED;
    } else throw Error()
  }

  public isMoving() {
    return this.state == VehicleState.FIRST_GEAR;
  }

  public isState(state: VehicleState) {
    return this.state == state;
  }
}
