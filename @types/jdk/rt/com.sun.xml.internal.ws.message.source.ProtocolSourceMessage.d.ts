declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace source {
class ProtocolSourceMessage extends com.sun.xml.internal.ws.api.message.Message {
    public constructor(arg0: javax.xml.transform.Source, arg1: com.sun.xml.internal.ws.api.SOAPVersion)
    public hasHeaders(): boolean
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public readPayloadAsSource(): javax.xml.transform.Source
    public readPayload(): javax.xml.stream.XMLStreamReader
    public writePayloadTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public copy(): com.sun.xml.internal.ws.api.message.Message
    public readEnvelopeAsSource(): javax.xml.transform.Source
    public readAsSOAPMessage(): javax.xml.soap.SOAPMessage
    public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean): javax.xml.soap.SOAPMessage
    public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
    public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
    public getSOAPVersion<T>(): com.sun.xml.internal.ws.api.SOAPVersion
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