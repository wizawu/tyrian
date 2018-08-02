declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace server {
                            interface SDDocument {
                                getRootName(): javax.xml.namespace.QName
                                isWSDL(): boolean
                                isSchema(): boolean
                                getImports(): java.util.Set<java.lang.String>
                                getURL(): java.net.URL
                                writeTo(arg0: com.sun.xml.internal.ws.api.server.PortAddressResolver, arg1: com.sun.xml.internal.ws.api.server.DocumentAddressResolver | com.sun.xml.internal.ws.api.server.DocumentAddressResolver$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                                writeTo(arg0: com.sun.xml.internal.ws.api.server.PortAddressResolver, arg1: com.sun.xml.internal.ws.api.server.DocumentAddressResolver | com.sun.xml.internal.ws.api.server.DocumentAddressResolver$$Lambda, arg2: javax.xml.stream.XMLStreamWriter): void
                            }
                        }
                    }
                }
            }
        }
    }
}