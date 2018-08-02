declare namespace sun {
    namespace misc {
class Signal {
    public getNumber(): int
    public getName(): string
    public equals(arg0: java.lang.Object): boolean
    public hashCode(): int
    public toString(): string
    public constructor(arg0: java.lang.String | string)
    public static handle(arg0: sun.misc.Signal, arg1: sun.misc.SignalHandler): sun.misc.SignalHandler
    public static raise(arg0: sun.misc.Signal): void
    public static class: java.lang.Class<any>
}

    }
}