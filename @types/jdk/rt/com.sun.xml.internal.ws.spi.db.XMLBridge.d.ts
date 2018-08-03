declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
                            interface XMLBridge<T> {
                                context(): com.sun.xml.internal.ws.spi.db.BindingContext
                                marshal(arg0: T, arg1: javax.xml.stream.XMLStreamWriter, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
                                marshal(arg0: T, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: javax.xml.namespace.NamespaceContext, arg3: javax.xml.bind.attachment.AttachmentMarshaller): void
                                marshal(arg0: T, arg1: org.w3c.dom.Node): void
                                marshal(arg0: T, arg1: org.xml.sax.ContentHandler, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
                                marshal(arg0: T, arg1: javax.xml.transform.Result): void
                                unmarshal(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                                unmarshal(arg0: javax.xml.transform.Source, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                                unmarshal(arg0: java.io.InputStream | java.io.InputStream$$Lambda): T
                                unmarshal(arg0: org.w3c.dom.Node, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
                                getTypeInfo(): com.sun.xml.internal.ws.spi.db.TypeInfo
                                supportOutputStream(): boolean
                            }
                        }
                    }
                }
            }
        }
    }
}