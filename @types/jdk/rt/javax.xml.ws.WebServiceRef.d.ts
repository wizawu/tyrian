declare namespace javax {
    namespace xml {
        namespace ws {
            interface WebServiceRef extends java.lang.annotation.Annotation {
                name(): string
                type(): java.lang.Class<any>
                mappedName(): string
                value(): java.lang.Class<javax.xml.ws.Service>
                wsdlLocation(): string
                lookup(): string
            }
        }
    }
}