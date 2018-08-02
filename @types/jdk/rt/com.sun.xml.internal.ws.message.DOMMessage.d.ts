declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
class DOMMessage extends com.sun.xml.internal.ws.message.AbstractMessageImpl {
    public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: org.w3c.dom.Element)
    public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.message.MessageHeaders, arg2: org.w3c.dom.Element)
    public constructor(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: com.sun.xml.internal.ws.api.message.MessageHeaders, arg2: org.w3c.dom.Element, arg3: com.sun.xml.internal.ws.api.message.AttachmentSet)
    public hasHeaders(): boolean
    public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public readPayloadAsSource(): javax.xml.transform.Source
    public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
    public readPayload<T>(): javax.xml.stream.XMLStreamReader
    public writePayloadTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
    protected writePayloadTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
    public copy<T>(): com.sun.xml.internal.ws.api.message.Message
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}