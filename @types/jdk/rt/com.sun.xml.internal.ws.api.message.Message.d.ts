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
                                public abstract hasHeaders(): boolean
                                public abstract getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
                                public getAttachments(): com.sun.xml.internal.ws.api.message.AttachmentSet
                                protected hasAttachments(): boolean
                                public setMessageMedadata(arg0: com.sun.xml.internal.ws.api.message.MessageMetadata | com.sun.xml.internal.ws.api.message.MessageMetadata$$Lambda): void
                                public getOperation(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundPortType): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                public getOperation(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): com.sun.xml.internal.ws.api.model.wsdl.WSDLBoundOperation
                                public getMethod(arg0: com.sun.xml.internal.ws.api.model.SEIModel): com.sun.xml.internal.ws.api.model.JavaMethod
                                public isOneWay(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): boolean
                                public assertOneWay(arg0: boolean): void
                                public abstract getPayloadLocalPart(): string
                                public abstract getPayloadNamespaceURI(): string
                                public abstract hasPayload(): boolean
                                public isFault(): boolean
                                public getFirstDetailEntryName(): javax.xml.namespace.QName
                                public abstract readEnvelopeAsSource(): javax.xml.transform.Source
                                public abstract readPayloadAsSource(): javax.xml.transform.Source
                                public abstract readAsSOAPMessage(): javax.xml.soap.SOAPMessage
                                public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: boolean): javax.xml.soap.SOAPMessage
                                public static getTransportHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                public static getTransportHeaders(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: boolean): java.util.Map<java.lang.String, java.util.List<java.lang.String>>
                                public static addSOAPMimeHeaders(arg0: javax.xml.soap.MimeHeaders, arg1: java.util.Map<java.lang.String, java.util.List<java.lang.String>>): void
                                public abstract readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
                                public abstract readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
                                public abstract readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
                                public abstract readPayload<T>(): javax.xml.stream.XMLStreamReader
                                public consume<T>(): void
                                public abstract writePayloadTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                public abstract writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                public abstract writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                                public abstract copy<T>(): com.sun.xml.internal.ws.api.message.Message
                                public getID<T>(arg0: com.sun.xml.internal.ws.api.WSBinding): string
                                public getID<T>(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public static generateMessageID<T>(): string
                                public getSOAPVersion<T>(): com.sun.xml.internal.ws.api.SOAPVersion
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}