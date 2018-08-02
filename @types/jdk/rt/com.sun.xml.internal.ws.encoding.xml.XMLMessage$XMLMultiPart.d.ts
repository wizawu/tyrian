declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace encoding {
                        namespace xml {
class XMLMessage$XMLMultiPart extends com.sun.xml.internal.ws.message.AbstractMessageImpl implements com.sun.xml.internal.ws.encoding.xml.XMLMessage$MessageDataSource {
    public constructor(arg0: java.lang.String | string, arg1: java.io.InputStream, arg2: com.sun.xml.internal.ws.api.WSFeatureList)
    public hasUnconsumedDataSource(): boolean
    public getDataSource(): javax.activation.DataSource
    public hasHeaders(): boolean
    public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public isFault(): boolean
    public readEnvelopeAsSource(): javax.xml.transform.Source
    public readPayloadAsSource(): javax.xml.transform.Source
    public readAsSOAPMessage(): javax.xml.soap.SOAPMessage
    public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean): javax.xml.soap.SOAPMessage
    public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
    public readPayload<T>(): javax.xml.stream.XMLStreamReader
    public writePayloadTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
    public copy<T>(): com.sun.xml.internal.ws.api.message.Message
    protected writePayloadTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
    public isOneWay<T>(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): boolean
    public getAttachments<T>(): com.sun.xml.internal.ws.api.message.AttachmentSet
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}