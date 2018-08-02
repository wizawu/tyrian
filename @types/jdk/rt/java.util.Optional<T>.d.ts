declare namespace java {
    namespace util {
class Optional<T> {
    public static empty<T>(): java.util.Optional<T>
    public static of<T>(arg0: T): java.util.Optional<T>
    public static ofNullable<T>(arg0: T): java.util.Optional<T>
    public get(): T
    public isPresent(): boolean
    public ifPresent(arg0: java.util.function$.Consumer$$TypeScript<T>): void
    public filter(arg0: java.util.function$.Predicate<T>): java.util.Optional<T>
    public map<U>(arg0: java.util.function$.Function<T, U>): java.util.Optional<U>
    public flatMap<U>(arg0: java.util.function$.Function<T, java.util.Optional<U>>): java.util.Optional<U>
    public orElse<U>(arg0: T): T
    public orElseGet<U>(arg0: java.util.function$.Supplier<T> | java.util.function$.Supplier$$Lambda<T>): T
    public orElseThrow<X extends java.lang.Throwable>(arg0: java.util.function$.Supplier<X> | java.util.function$.Supplier$$Lambda<X>): T
    public equals<X extends java.lang.Throwable>(arg0: java.lang.Object): boolean
    public hashCode<X extends java.lang.Throwable>(): int
    public toString<X extends java.lang.Throwable>(): string
    public static class: java.lang.Class<any>
}

    }
}