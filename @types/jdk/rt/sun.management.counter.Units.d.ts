declare namespace sun {
    namespace management {
        namespace counter {
            class Units implements java.io.Serializable {
                public static readonly INVALID: sun.management.counter.Units
                public static readonly NONE: sun.management.counter.Units
                public static readonly BYTES: sun.management.counter.Units
                public static readonly TICKS: sun.management.counter.Units
                public static readonly EVENTS: sun.management.counter.Units
                public static readonly STRING: sun.management.counter.Units
                public static readonly HERTZ: sun.management.counter.Units
                public toString(): string
                public intValue(): int
                public static toUnits(arg0: int): sun.management.counter.Units
                public static class: java.lang.Class<any>
            }
        }
    }
}