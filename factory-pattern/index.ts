enum TransportType {
    TRUCK = 'TRUCK',
    SHIP = 'SHIP',
    PLANE = 'PLANE'
}

interface Transport {
    name(): string;
    type(): TransportType;
}

abstract class Logistic {
    protected abstract createTransport(): Transport;
    public abstract delivery(): string;
}

class HeavyTruck implements Transport {
    name(): string {
        return 'First Heavy Truck'
    }

    type(): TransportType {
        return TransportType.TRUCK;
    }
}

class RoyalShip implements Transport {
    name(): string {
        return 'First Royal Ship'
    }

    type(): TransportType {
        return TransportType.SHIP;
    }
}

class RoadLogistic extends Logistic {
    protected createTransport(): Transport {
        return new HeavyTruck();
    }

    public delivery(): string {
        const transport: Transport = this.createTransport();
        if (transport.type() !== TransportType.TRUCK) {
            throw new Error('Wrong transport registerd!')
        }

        return `Using ${transport.name()} for RoadLogistic`;
    }
}


class SeaLogistic extends Logistic {
    protected createTransport(): Transport {
        return new RoyalShip();
    }

    public delivery(): string {
        const transport: Transport = this.createTransport();
        if (transport.type() !== TransportType.SHIP) {
            throw new Error('Wrong transport registerd!')
        }

        return `Using ${transport.name()} for SeaLogistic`;
    }
}

function sendPackage(logistic: Logistic) {
    console.log(logistic.delivery());
}

sendPackage(new RoadLogistic());
sendPackage(new SeaLogistic());