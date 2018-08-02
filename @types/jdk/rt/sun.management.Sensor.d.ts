declare namespace sun {
    namespace management {
abstract class Sensor {
    public constructor(arg0: java.lang.String | string)
    public getName(): string
    public getCount(): long
    public isOn(): boolean
    public trigger(): void
    public trigger(arg0: int): void
    public trigger(arg0: int, arg1: java.lang.management.MemoryUsage): void
    public clear(): void
    public clear(arg0: int): void
    public toString(): string
    public static class: java.lang.Class<any>
}

    }
}