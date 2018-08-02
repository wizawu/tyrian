declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace stream {
class PayloadStreamReaderMessage extends com.sun.xml.internal.ws.message.AbstractMessageImpl {
    public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.ws.api.SOAPVersion)
    public constructor(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: javax.xml.stream.XMLStreamReader, arg2: com.sun.xml.internal.ws.api.message.AttachmentSet, arg3: com.sun.xml.internal.ws.api.SOAPVersion)
    public hasHeaders(): boolean
    public getAttachments(): com.sun.xml.internal.ws.api.message.AttachmentSet
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public readPayloadAsSource(): javax.xml.transform.Source
    public readPayload(): javax.xml.stream.XMLStreamReader
    public writePayloadTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
    protected writePayloadTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
    public copy<T>(): com.sun.xml.internal.ws.api.message.Message
    public getHeaders<T>(): com.sun.xml.internal.ws.api.message.MessageHeaders
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}