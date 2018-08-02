declare namespace javax {
    namespace xml {
        namespace ws {
interface WebServiceProvider extends java.lang.annotation.Annotation {
    wsdlLocation(): string
    serviceName(): string
    targetNamespace(): string
    portName(): string
}

        }
    }
}