declare namespace java {
    namespace util {
        class OptionalDouble {
            public static empty(): java.util.OptionalDouble
            public static of(arg0: double): java.util.OptionalDouble
            public getAsDouble(): double
            public isPresent(): boolean
            public ifPresent(arg0: java.util.function$.DoubleConsumer): void
            public orElse(arg0: double): double
            public orElseGet(arg0: java.util.function$.DoubleSupplier | java.util.function$.DoubleSupplier$$Lambda): double
            public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$Lambda<X>): double
            public equals<X extends java.lang.Throwable>(arg0: java.lang.Object): boolean
            public hashCode<X extends java.lang.Throwable>(): int
            public toString<X extends java.lang.Throwable>(): string
            public static class: java.lang.Class<any>
        }
    }
}