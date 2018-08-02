declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                namespace annotations {
                    interface Property extends java.lang.annotation.Annotation {
                        name(): string
                        attributes(): int
                        clazz(): string
                        where(): jdk.nashorn.internal.objects.annotations.Where
                    }
                }
            }
        }
    }
}