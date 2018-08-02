declare namespace java {
    namespace util {
        namespace function$ {
            interface UnaryOperator<T> extends java.util.function$.Function<T, T> {
                identity<T>(): java.util.function$.UnaryOperator<T>
            }
        }
    }
}