declare namespace javax {
    namespace xml {
        namespace ws {
            interface RequestWrapper extends java.lang.annotation.Annotation {
                localName(): string
                targetNamespace(): string
                className(): string
                partName(): string
            }
        }
    }
}