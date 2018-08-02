declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
interface SDDocument$WSDL extends com.sun.xml.internal.ws.api.server.SDDocument {
    getTargetNamespace(): string
    hasPortType(): boolean
    hasService(): boolean
    getAllServices(): java.util.Set<javax.xml.namespace.QName>
}

                        }
                    }
                }
            }
        }
    }
}