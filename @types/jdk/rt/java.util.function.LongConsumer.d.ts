declare namespace java {
    namespace util {
        namespace function$ {
            interface LongConsumer {
                accept(arg0: long): void
                andThen(arg0: java.util.function$.LongConsumer): java.util.function$.LongConsumer
            }
        }
    }
}