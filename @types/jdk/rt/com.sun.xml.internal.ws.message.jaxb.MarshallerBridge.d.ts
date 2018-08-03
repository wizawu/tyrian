declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace jaxb {
                            class MarshallerBridge extends com.sun.xml.internal.bind.api.Bridge {
                                public constructor(arg0: com.sun.xml.internal.bind.api.JAXBRIContext)
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: javax.xml.stream.XMLStreamWriter): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: java.io.OutputStream, arg3: javax.xml.namespace.NamespaceContext): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: org.w3c.dom.Node): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: org.xml.sax.ContentHandler): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: java.lang.Object, arg2: javax.xml.transform.Result): void
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.stream.XMLStreamReader): java.lang.Object
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.transform.Source): java.lang.Object
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: java.io.InputStream): java.lang.Object
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: org.w3c.dom.Node): java.lang.Object
                                public getTypeReference(): com.sun.xml.internal.bind.api.TypeReference
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}