declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
class DOMHeader<N extends org.w3c.dom.Element> extends com.sun.xml.internal.ws.message.AbstractHeaderImpl {
    protected node: N
    public constructor(arg0: N)
    public getNamespaceURI(): string
    public getLocalPart(): string
    public readHeader(): javax.xml.stream.XMLStreamReader
    public readAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public readAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
    public writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
    public getAttribute<T>(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public writeTo<T>(arg0: javax.xml.soap.SOAPMessage): void
    public getStringContent<T>(): string
    public getWrappedNode<T>(): N
    public hashCode<T>(): int
    public equals<T>(arg0: java.lang.Object): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}