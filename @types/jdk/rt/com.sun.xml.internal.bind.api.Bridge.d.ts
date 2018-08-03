declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace bind {
                    namespace api {
                        abstract class Bridge<T> {
                            protected readonly context: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl
                            protected constructor(arg0: com.sun.xml.internal.bind.v2.runtime.JAXBContextImpl)
                            public getContext(): com.sun.xml.internal.bind.api.JAXBRIContext
                            public marshal(arg0: T, arg1: javax.xml.stream.XMLStreamWriter): void
                            public marshal(arg0: T, arg1: javax.xml.stream.XMLStreamWriter, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
                            public marshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: T, arg2: javax.xml.stream.XMLStreamWriter): void
                            public abstract marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: javax.xml.stream.XMLStreamWriter): void
                            public marshal(arg0: T, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: javax.xml.namespace.NamespaceContext): void
                            public marshal(arg0: T, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: javax.xml.namespace.NamespaceContext, arg3: javax.xml.bind.attachment.AttachmentMarshaller): void
                            public marshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: T, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: javax.xml.namespace.NamespaceContext): void
                            public abstract marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: java.io.OutputStream | java.io.OutputStream$$Lambda, arg3: javax.xml.namespace.NamespaceContext): void
                            public marshal(arg0: T, arg1: org.w3c.dom.Node): void
                            public marshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: T, arg2: org.w3c.dom.Node): void
                            public abstract marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: org.w3c.dom.Node): void
                            public marshal(arg0: T, arg1: org.xml.sax.ContentHandler): void
                            public marshal(arg0: T, arg1: org.xml.sax.ContentHandler, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
                            public marshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: T, arg2: org.xml.sax.ContentHandler): void
                            public abstract marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: org.xml.sax.ContentHandler): void
                            public marshal(arg0: T, arg1: javax.xml.transform.Result): void
                            public marshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: T, arg2: javax.xml.transform.Result): void
                            public abstract marshal(arg0: javax.xml.bind.Marshaller, arg1: T, arg2: javax.xml.transform.Result): void
                            public unmarshal(arg0: javax.xml.stream.XMLStreamReader): T
                            public unmarshal(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                            public unmarshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: javax.xml.stream.XMLStreamReader): T
                            public abstract unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.stream.XMLStreamReader): T
                            public unmarshal(arg0: javax.xml.transform.Source): T
                            public unmarshal(arg0: javax.xml.transform.Source, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                            public unmarshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: javax.xml.transform.Source): T
                            public abstract unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: javax.xml.transform.Source): T
                            public unmarshal(arg0: java.io.InputStream | java.io.InputStream$$Lambda): T
                            public unmarshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: java.io.InputStream | java.io.InputStream$$Lambda): T
                            public abstract unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: java.io.InputStream | java.io.InputStream$$Lambda): T
                            public unmarshal(arg0: org.w3c.dom.Node): T
                            public unmarshal(arg0: org.w3c.dom.Node, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                            public unmarshal(arg0: com.sun.xml.internal.bind.api.BridgeContext, arg1: org.w3c.dom.Node): T
                            public abstract unmarshal(arg0: javax.xml.bind.Unmarshaller, arg1: org.w3c.dom.Node): T
                            public abstract getTypeReference(): com.sun.xml.internal.bind.api.TypeReference
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}