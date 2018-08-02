declare namespace java {
    namespace nio {
        namespace file {
            namespace attribute {
                interface FileAttribute<T> {
                    name(): string
                    value(): T
                }
            }
        }
    }
}