declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace server {
                        class SDDocumentImpl extends com.sun.xml.internal.ws.api.server.SDDocumentSource implements com.sun.xml.internal.ws.api.server.SDDocument {
                            public static create(arg0: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg1: javax.xml.namespace.QName, arg2: javax.xml.namespace.QName): com.sun.xml.internal.ws.server.SDDocumentImpl
                            protected constructor(arg0: javax.xml.namespace.QName, arg1: java.net.URL, arg2: com.sun.xml.internal.ws.api.server.SDDocumentSource)
                            protected constructor(arg0: javax.xml.namespace.QName, arg1: java.net.URL, arg2: com.sun.xml.internal.ws.api.server.SDDocumentSource, arg3: java.util.Set<java.lang.String>)
                            public getRootName(): javax.xml.namespace.QName
                            public isWSDL(): boolean
                            public isSchema(): boolean
                            public getURL(): java.net.URL
                            public read(arg0: javax.xml.stream.XMLInputFactory): javax.xml.stream.XMLStreamReader
                            public read(): javax.xml.stream.XMLStreamReader
                            public getSystemId(): java.net.URL
                            public getImports(): java.util.Set<java.lang.String>
                            public writeTo(arg0: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public writeTo(arg0: com.sun.xml.internal.ws.api.server.PortAddressResolver, arg1: com.sun.xml.internal.ws.api.server.DocumentAddressResolver | com.sun.xml.internal.ws.api.server.DocumentAddressResolver$$Lambda, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda): void
                            public writeTo(arg0: com.sun.xml.internal.ws.api.server.PortAddressResolver, arg1: com.sun.xml.internal.ws.api.server.DocumentAddressResolver | com.sun.xml.internal.ws.api.server.DocumentAddressResolver$$Lambda, arg2: javax.xml.stream.XMLStreamWriter): void
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}