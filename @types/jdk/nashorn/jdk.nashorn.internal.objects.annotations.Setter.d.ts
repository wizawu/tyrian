declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                namespace annotations {
                    interface Setter extends java.lang.annotation.Annotation {
                        name(): string
                        attributes(): int
                        where(): jdk.nashorn.internal.objects.annotations.Where
                    }
                }
            }
        }
    }
}