declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
class EmptyMessageImpl extends com.sun.xml.internal.ws.message.AbstractMessageImpl {
    public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion)
    public constructor(arg0: com.sun.xml.internal.ws.api.message.MessageHeaders, arg1: com.sun.xml.internal.ws.api.message.AttachmentSet, arg2: com.sun.xml.internal.ws.api.SOAPVersion)
    public hasHeaders(): boolean
    public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public readPayloadAsSource(): javax.xml.transform.Source
    public readPayload(): javax.xml.stream.XMLStreamReader
    public writePayloadTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public writePayloadTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
    public copy(): com.sun.xml.internal.ws.api.message.Message
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}