declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace runtime {
                namespace logging {
                    interface Logger extends java.lang.annotation.Annotation {
                        name(): string
                    }
                    interface Logger$$Lambda extends java.lang.annotation.Annotation {
                        (): string
                    }
                }
            }
        }
    }
}