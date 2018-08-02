declare namespace javax {
    namespace jws {
        interface WebService extends java.lang.annotation.Annotation {
            name(): string
            targetNamespace(): string
            serviceName(): string
            portName(): string
            wsdlLocation(): string
            endpointInterface(): string
        }
    }
}