declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace db {
                        namespace glassfish {
                            class MarshallerBridge extends com.sun.xml.internal.bind.api.Bridge implements com.sun.xml.internal.ws.spi.db.XMLBridge {
                                protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl)
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: javax.xml.stream.XMLStreamWriter): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: javax.xml.namespace.NamespaceContext): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: org.w3c.dom.Node): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: org.xml.sax.ContentHandler): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: javax.xml.transform.Result): void
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.stream.XMLStreamReader): java.lang.Object
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.transform.Source): java.lang.Object
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: java.io.InputStream | java.io.InputStream$$Lambda): java.lang.Object
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: org.w3c.dom.Node): java.lang.Object
                                public getTypeInfo(): com.sun.xml.internal.ws.spi.db.TypeInfo
                                public getTypeReference(): com.sun.xml.internal.bind.api.TypeReference
                                public context(): com.sun.xml.internal.ws.spi.db.BindingContext
                                public supportOutputStream(): boolean
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}