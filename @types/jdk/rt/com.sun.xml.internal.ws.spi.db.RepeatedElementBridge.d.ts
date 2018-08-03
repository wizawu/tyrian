declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
                            class RepeatedElementBridge<T> implements com.sun.xml.internal.ws.spi.db.XMLBridge<T> {
                                public constructor(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo, arg1: com.sun.xml.internal.ws.spi.db.XMLBridge)
                                public collectionHandler(): com.sun.xml.internal.ws.spi.db.RepeatedElementBridge$CollectionHandler
                                public context(): com.sun.xml.internal.ws.spi.db.BindingContext
                                public marshal(arg0: T, arg1: javax.xml.stream.XMLStreamWriter, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
                                public marshal(arg0: T, arg1: java.io.OutputStream, arg2: javax.xml.namespace.NamespaceContext, arg3: javax.xml.bind.attachment.AttachmentMarshaller): void
                                public marshal(arg0: T, arg1: org.w3c.dom.Node): void
                                public marshal(arg0: T, arg1: org.xml.sax.ContentHandler, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
                                public marshal(arg0: T, arg1: javax.xml.transform.Result): void
                                public unmarshal(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                                public unmarshal(arg0: javax.xml.transform.Source, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                                public unmarshal(arg0: java.io.InputStream): T
                                public unmarshal(arg0: org.w3c.dom.Node, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                                public getTypeInfo(): com.sun.xml.internal.ws.spi.db.TypeInfo
                                public supportOutputStream(): boolean
                                public static create(arg0: com.sun.xml.internal.ws.spi.db.TypeInfo): com.sun.xml.internal.ws.spi.db.RepeatedElementBridge$CollectionHandler
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}