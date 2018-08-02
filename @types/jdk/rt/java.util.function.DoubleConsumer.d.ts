declare namespace java {
    namespace util {
        namespace function$ {
            interface DoubleConsumer {
                accept(arg0: double): void
                andThen(arg0: java.util.function$.DoubleConsumer): java.util.function$.DoubleConsumer
            }
        }
    }
}