declare namespace javax {
    namespace xml {
        namespace ws {
            interface WebServiceClient extends java.lang.annotation.Annotation {
                name(): string
                targetNamespace(): string
                wsdlLocation(): string
            }
        }
    }
}