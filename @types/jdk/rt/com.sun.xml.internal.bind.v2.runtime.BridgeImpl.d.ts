declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class BridgeImpl<T> extends com.sun.xml.internal.bind.v2.runtime.InternalBridge<T> {
                                public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl, arg1: com.sun.xml.internal.bind.v2.runtime.Name, arg2: com.sun.xml.internal.bind.v2.runtime.JaxBeanInfo<T>, arg3: com.sun.xml.internal.bind.api.TypeReference)
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: javax.xml.stream.XMLStreamWriter): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: javax.xml.namespace.NamespaceContext): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: org.w3c.dom.Node): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: org.xml.sax.ContentHandler): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: javax.xml.transform.Result): void
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.stream.XMLStreamReader): T
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.transform.Source): T
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: java.io.InputStream | java.io.InputStream$$Lambda): T
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: org.w3c.dom.Node): T
                                public getTypeReference(): com.sun.xml.internal.bind.api.TypeReference
                                public marshal(arg0: T, arg1: com.sun.xml.internal.bind.v2.runtime.XMLSerializer): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}