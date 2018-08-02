declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            class FilterMessageImpl extends com.sun.xml.internal.ws.api.message.Message {
                                protected constructor(arg0: com.sun.xml.internal.ws.api.message.Message)
                                public hasHeaders(): boolean
                                public getHeaders(): com.sun.xml.internal.ws.api.message.MessageHeaders
                                public getAttachments(): com.sun.xml.internal.ws.api.message.AttachmentSet
                                protected hasAttachments(): boolean
                                public isOneWay(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): boolean
                                public getPayloadLocalPart(): string
                                public getPayloadNamespaceURI(): string
                                public hasPayload(): boolean
                                public isFault(): boolean
                                public getFirstDetailEntryName(): javax.xml.namespace.QName
                                public readEnvelopeAsSource(): javax.xml.transform.Source
                                public readPayloadAsSource(): javax.xml.transform.Source
                                public readAsSOAPMessage(): javax.xml.soap.SOAPMessage
                                public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.message.Packet | com.sun.xml.internal.ws.api.message.Packet$$Lambda, arg1: boolean): javax.xml.soap.SOAPMessage
                                public readPayloadAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
                                public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
                                public readPayloadAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
                                public readPayload<T>(): javax.xml.stream.XMLStreamReader
                                public consume<T>(): void
                                public writePayloadTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                public writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                public writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                                public copy<T>(): com.sun.xml.internal.ws.api.message.Message
                                public getID<T>(arg0: com.sun.xml.internal.ws.api.WSBinding): string
                                public getID<T>(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion, arg1: com.sun.xml.internal.ws.api.SOAPVersion): string
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