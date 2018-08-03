declare namespace java {
    namespace util {
        namespace function$ {
            interface Consumer<T> {
                accept(arg0: T): void
                andThen(arg0: java.util.function$.Consumer$$Lambda<T>): java.util.function$.Consumer<T>
            }
        }
    }
}