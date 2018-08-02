declare namespace java {
    namespace util {
class OptionalLong {
    public static empty(): java.util.OptionalLong
    public static of(arg0: long): java.util.OptionalLong
    public getAsLong(): long
    public isPresent(): boolean
    public ifPresent(arg0: java.util.function$.LongConsumer): void
    public orElse(arg0: long): long
    public orElseGet(arg0: java.util.function$.LongSupplier | java.util.function$.LongSupplier$$Lambda): long
    public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$Lambda<X>): long
    public equals<X extends java.lang.Throwable>(arg0: java.lang.Object): boolean
    public hashCode<X extends java.lang.Throwable>(): int
    public toString<X extends java.lang.Throwable>(): string
    public static class: java.lang.Class<any>
}

    }
}