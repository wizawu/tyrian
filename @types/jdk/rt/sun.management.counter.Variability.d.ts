declare namespace sun {
    namespace management {
        namespace counter {
            class Variability implements java.io.Serializable {
                public static readonly INVALID: sun.management.counter.Variability
                public static readonly CONSTANT: sun.management.counter.Variability
                public static readonly MONOTONIC: sun.management.counter.Variability
                public static readonly VARIABLE: sun.management.counter.Variability
                public toString(): string
                public intValue(): int
                public static toVariability(arg0: int): sun.management.counter.Variability
                public static class: java.lang.Class<any>
            }
        }
    }
}