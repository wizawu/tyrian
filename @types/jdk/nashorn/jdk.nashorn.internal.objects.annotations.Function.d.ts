declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                namespace annotations {
                    interface Function extends java.lang.annotation.Annotation {
                        name(): string
                        attributes(): int
                        arity(): int
                        where(): jdk.nashorn.internal.objects.annotations.Where
                    }
                }
            }
        }
    }
}