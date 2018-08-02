declare namespace java {
    namespace util {
class OptionalInt {
    public static empty(): java.util.OptionalInt
    public static of(arg0: int): java.util.OptionalInt
    public getAsInt(): int
    public isPresent(): boolean
    public ifPresent(arg0: java.util.function$.IntConsumer): void
    public orElse(arg0: int): int
    public orElseGet(arg0: java.util.function$.IntSupplier | java.util.function$.IntSupplier$$Lambda): int
    public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$Lambda<X>): int
    public equals<X extends java.lang.Throwable>(arg0: java.lang.Object): boolean
    public hashCode<X extends java.lang.Throwable>(): int
    public toString<X extends java.lang.Throwable>(): string
    public static class: java.lang.Class<any>
}

    }
}