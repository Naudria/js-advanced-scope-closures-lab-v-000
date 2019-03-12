function produceDrivingRange(blockRange) {
    return function(start, end) {
        let totalDistance = parseInt(end) - parseInt(start);
        let diffWRange = Math.abs(blockRange - totalDistance);
        if (totalDistance > blockRange) {
            return `${diffWRange} blocks out of range`;
        } else {
            return `within range by ${diffWRange}`;
        }
    }
}

function produceTipCalculator(percentage) {
    return function(amount) {
        return amount * percentage;
    }
}

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name
            this.id = ++driverId
        }
    }
}