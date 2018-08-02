declare namespace javax {
    namespace xml {
        namespace ws {
interface WebFault extends java.lang.annotation.Annotation {
    name(): string
    targetNamespace(): string
    faultBean(): string
    messageName(): string
}

        }
    }
}