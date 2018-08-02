declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                interface Source$Data {
                    url(): java.net.URL
                    length(): int
                    lastModified(): long
                    array(): char[]
                    isEvalCode(): boolean
                }
            }
        }
    }
}