declare namespace java {
    namespace net {
        interface SocketOption<T> {
            name(): string
            type(): java.lang.Class<T>
        }
    }
}