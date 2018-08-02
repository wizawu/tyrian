declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace jaxb {
class JAXBHeader extends com.sun.xml.internal.ws.message.AbstractHeaderImpl {
    public constructor(arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: java.lang.Object)
    public constructor(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge, arg1: java.lang.Object)
    public getNamespaceURI(): string
    public getLocalPart(): string
    public getAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public readHeader(): javax.xml.stream.XMLStreamReader
    public readAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public readAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
    public readAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
    public writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo<T>(arg0: javax.xml.soap.SOAPMessage): void
    public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}