declare namespace javax {
    namespace jws {
        interface WebResult extends java.lang.annotation.Annotation {
            name(): string
            partName(): string
            targetNamespace(): string
            header(): boolean
        }
    }
}