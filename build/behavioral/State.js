/**
* The state pattern, which closely resembles Strategy Pattern, is a behavioral software design
* pattern, also known as the objects for states pattern. This pattern is used in computer
* programming to encapsulate varying behavior for the same object based on its internal state.
* This can be a cleaner way for an object to change its behavior at runtime without resorting to
* large monolithic conditional statements and thus improve maintainability.
*/
var VehicleState;
(function (VehicleState) {
    VehicleState[VehicleState["PARKED"] = 0] = "PARKED";
    VehicleState[VehicleState["IDLING"] = 1] = "IDLING";
    VehicleState[VehicleState["FIRST_GEAR"] = 2] = "FIRST_GEAR";
})(VehicleState || (VehicleState = {}));
var Vehicle = (function () {
    function Vehicle() {
        this.state = VehicleState.PARKED;
    }
    Vehicle.prototype.ignite = function () {
        if (this.state == VehicleState.PARKED) {
            this.state = VehicleState.IDLING;
        }
        else
            throw Error();
    };
    Vehicle.prototype.shift_up = function () {
        if (this.state == VehicleState.IDLING) {
            this.state = VehicleState.FIRST_GEAR;
        }
        else
            throw Error();
    };
    Vehicle.prototype.shift_down = function () {
        if (this.state == VehicleState.FIRST_GEAR) {
            this.state = VehicleState.IDLING;
        }
        else
            throw Error();
    };
    Vehicle.prototype.park = function () {
        if (this.state == VehicleState.IDLING) {
            this.state = VehicleState.PARKED;
        }
        else
            throw Error();
    };
    Vehicle.prototype.isMoving = function () {
        return this.state == VehicleState.FIRST_GEAR;
    };
    Vehicle.prototype.isState = function (state) {
        return this.state == state;
    };
    return Vehicle;
})();
