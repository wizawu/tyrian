declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace saaj {
class SAAJMessage extends com.sun.xml.internal.ws.api.message.Message {
    public constructor(arg0: javax.xml.soap.SOAPMessage)
    protected access(): void
    public hasHeaders(): boolean
    public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
    public getAttachments(): com.sun.xml.internal.ws.api.message.AttachmentSet
    protected hasAttachments(): boolean
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public readEnvelopeAsSource(): javax.xml.transform.Source
    public readAsSOAPMessage(): javax.xml.soap.SOAPMessage
    public readPayloadAsSource(): javax.xml.transform.Source
    public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
    public readPayload<T>(): javax.xml.stream.XMLStreamReader
    public writePayloadTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
    public copy<T>(): com.sun.xml.internal.ws.api.message.Message
    public getSOAPVersion<T>(): com.sun.xml.internal.ws.api.SOAPVersion
    protected getXMLStreamReader<T>(arg0: javax.xml.soap.SOAPElement): javax.xml.stream.XMLStreamReader
    protected createXMLStreamReader<T>(arg0: javax.xml.soap.SOAPElement): javax.xml.stream.XMLStreamReader
    protected soapBodyFirstChildReader<T>(): javax.xml.stream.XMLStreamReader
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}