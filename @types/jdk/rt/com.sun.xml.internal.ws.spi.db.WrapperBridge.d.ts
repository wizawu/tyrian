declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace spi {
                        namespace db {
class WrapperBridge<T> implements com.sun.xml.internal.ws.spi.db.XMLBridge<T> {
    public constructor(arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: com.sun.xml.internal.ws.spi.db.TypeInfo)
    public context(): com.sun.xml.internal.ws.spi.db.BindingContext
    public getTypeInfo(): com.sun.xml.internal.ws.spi.db.TypeInfo
    public marshal(arg0: T, arg1: org.xml.sax.ContentHandler, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
    public marshal(arg0: T, arg1: org.w3c.dom.Node): void
    public marshal(arg0: T, arg1: java.io.OutputStream | java.io.OutputStream$$Lambda, arg2: javax.xml.namespace.NamespaceContext, arg3: javax.xml.bind.attachment.AttachmentMarshaller): void
    public marshal(arg0: T, arg1: javax.xml.transform.Result): void
    public marshal(arg0: T, arg1: javax.xml.stream.XMLStreamWriter, arg2: javax.xml.bind.attachment.AttachmentMarshaller): void
    public unmarshal(arg0: java.io.InputStream): T
    public unmarshal(arg0: org.w3c.dom.Node, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
    public unmarshal(arg0: javax.xml.transform.Source, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
    public unmarshal(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.bind.attachment.AttachmentUnmarshaller): T
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