declare namespace sun {
    namespace management {
        namespace counter {
            abstract class AbstractCounter implements sun.management.counter.Counter {
                protected constructor(arg0: java.lang.String | string, arg1: sun.management.counter.Units, arg2: sun.management.counter.Variability, arg3: int, arg4: int)
                protected constructor(arg0: java.lang.String | string, arg1: sun.management.counter.Units, arg2: sun.management.counter.Variability, arg3: int)
                public getName(): string
                public getUnits(): sun.management.counter.Units
                public getVariability(): sun.management.counter.Variability
                public isVector(): boolean
                public getVectorLength(): int
                public isInternal(): boolean
                public getFlags(): int
                public abstract getValue(): java.lang.Object
                public toString(): string
                public static class: java.lang.Class<any>
            }
            interface AbstractCounter$$Lambda implements sun.management.counter.Counter {
                (): java.lang.Object
            }
        }
    }
}