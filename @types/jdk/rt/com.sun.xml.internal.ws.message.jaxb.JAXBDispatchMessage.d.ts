declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace jaxb {
class JAXBDispatchMessage extends com.sun.xml.internal.ws.message.AbstractMessageImpl {
    public constructor(arg0: javax.xml.bind.JAXBContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion)
    public constructor(arg0: com.sun.xml.internal.ws.spi.db.BindingContext, arg1: java.lang.Object, arg2: com.sun.xml.internal.ws.api.SOAPVersion)
    protected writePayloadTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
    public hasHeaders(): boolean
    public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public readPayloadAsSource(): javax.xml.transform.Source
    public readPayload(): javax.xml.stream.XMLStreamReader
    public writePayloadTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public copy(): com.sun.xml.internal.ws.api.message.Message
    public writeTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}