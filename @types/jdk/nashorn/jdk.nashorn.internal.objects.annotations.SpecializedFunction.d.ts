declare namespace jdk {
    namespace nashorn {
        namespace internal {
            namespace objects {
                namespace annotations {
interface SpecializedFunction extends java.lang.annotation.Annotation {
    name(): string
    linkLogic(): java.lang.Class<any>
    isConstructor(): boolean
    isOptimistic(): boolean
}

                }
            }
        }
    }
}