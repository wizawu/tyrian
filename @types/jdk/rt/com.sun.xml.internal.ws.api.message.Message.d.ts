declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
abstract class Message {
    protected attachmentSet: com.sun.xml.internal.ws.api.message.AttachmentSet
    public constructor()
    public hasHeaders(): boolean
    public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
    public getAttachments(): com.sun.xml.internal.ws.api.message.AttachmentSet
    protected hasAttachments(): boolean
    public setMessageMedadata(arg0: com.sun.xml.internal.ws.api.message.MessageMetadata | com.sun.xml.internal.ws.api.message.MessageMetadata$$Lambda): void
    public getOperation(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
    public getOperation(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
    public getMethod(arg0: com.sun.xml.internal.ws.api.model.SEIModel): com.sun.xml.internal.ws.api.model.JavaMethod
    public isOneWay(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): boolean
    public assertOneWay(arg0: boolean): void
    public getPayloadLocalPart(): string
    public getPayloadNamespaceURI(): string
    public hasPayload(): boolean
    public isFault(): boolean
    public getFirstDetailEntryName(): javax.xml.namespace.QName
    public readEnvelopeAsSource(): javax.xml.transform.Source
    public readPayloadAsSource(): javax.xml.transform.Source
    public readAsSOAPMessage(): javax.xml.soap.SOAPMessage
    public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean): javax.xml.soap.SOAPMessage
    public static getTransportHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public static getTransportHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
    public static addSOAPMimeHeaders(arg0: javax.xml.soap.MimeHeaders, arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
    public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
    public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
    public readPayload(): javax.xml.stream.XMLStreamReader
    public consume(): void
    public writePayloadTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo(arg0: javax.xml.stream.XMLStreamWriter): void
    public writeTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
    public copy(): com.sun.xml.internal.ws.api.message.Message
    public getID(arg0: com.sun.xml.internal.ws.api.WSBinding): string
    public getID(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
    public static generateMessageID(): string
    public getSOAPVersion(): com.sun.xml.internal.ws.api.SOAPVersion
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}