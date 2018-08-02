declare namespace java {
    namespace nio {
        namespace file {
            interface WatchEvent$Kind<T> {
                name(): string
                type(): java.lang.Class<T>
            }
        }
    }
}