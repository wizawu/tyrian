declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace v2 {
                        namespace runtime {
                            class BridgeAdapter<OnWire, InMemory> extends com.sun.xml.internal.bind.v2.runtime.InternalBridge<InMemory> {
                                public constructor(arg0: com.sun.xml.internal.bind.v2.runtime.InternalBridge<OnWire>, arg1: java.lang.Class<javax.xml.bind.annotation.adapters.XmlAdapter<OnWire, InMemory>>)
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: InMemory, arg2: javax.xml.stream.XMLStreamWriter): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: InMemory, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: javax.xml.namespace.NamespaceContext): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: InMemory, arg2: org.w3c.dom.Node): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: InMemory, arg2: org.xml.sax.ContentHandler): void
                                public marshal(arg0: javax.xml.bind.Marshaller, arg1: InMemory, arg2: javax.xml.transform.Result): void
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.stream.XMLStreamReader): InMemory
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.transform.Source): InMemory
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: java.io.InputStream): InMemory
                                public unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: org.w3c.dom.Node): InMemory
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