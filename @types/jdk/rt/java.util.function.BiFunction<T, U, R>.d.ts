declare namespace java {
    namespace util {
        namespace function$ {
interface BiFunction<T, U, R> {
    apply(arg0: T, arg1: U): R
    andThen<V>(arg0: java.util.function$.Function<R, V>): java.util.function$.BiFunction<T, U, V>
}

        }
    }
}