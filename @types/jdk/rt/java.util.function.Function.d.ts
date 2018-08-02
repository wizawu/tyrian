declare namespace java {
    namespace util {
        namespace function$ {
interface Function<T, R> {
    apply(arg0: T): R
    compose<V>(arg0: java.util.function$.Function<V, T>): java.util.function$.Function<V, R>
    andThen<V>(arg0: java.util.function$.Function<R, V>): java.util.function$.Function<T, V>
    identity<T>(): java.util.function$.Function<T, T>
}

        }
    }
}