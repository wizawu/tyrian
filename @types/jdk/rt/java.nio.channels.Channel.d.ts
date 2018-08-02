declare namespace java {
    namespace nio {
        namespace channels {
interface Channel extends java.io.Closeable {
    isOpen(): boolean
    close(): void
}

        }
    }
}