declare namespace java {
    namespace util {
        namespace stream {
            interface Node$Builder<T> extends java.util.stream.Sink<T> {
                build(): java.util.stream.Node<T>
            }
            interface Node$Builder$$Lambda<T> extends java.util.stream.Sink<T> {
                (): java.util.stream.Node<T>
            }
        }
    }
}