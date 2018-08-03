declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            class MessageWrapper extends com.sun.xml.internal.ws.message.stream.StreamMessage {
                                public writePayloadTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler, arg2: boolean): void
                                public getBodyPrologue(): string
                                public getBodyEpilogue(): string
                                public hashCode(): int
                                public equals(arg0: java.lang.Object): boolean
                                public hasHeaders(): boolean
                                public getAttachments(): com.sun.xml.internal.ws.api.message.AttachmentSet
                                public toString(): string
                                public isOneWay(arg0: com.sun.xml.internal.ws.api.model.wsdl.WSDLPort): boolean
                                public getPayloadLocalPart(): string
                                public getPayloadNamespaceURI(): string
                                public hasPayload(): boolean
                                public isFault(): boolean
                                public getFirstDetailEntryName(): javax.xml.namespace.QName
                                public readEnvelopeAsSource(): javax.xml.transform.Source
                                public readPayloadAsSource(): javax.xml.transform.Source
                                public readAsSOAPMessage(): javax.xml.soap.SOAPMessage
                                public readAsSOAPMessage(arg0: com.sun.xml.internal.ws.api.message.Packet, arg1: boolean): javax.xml.soap.SOAPMessage
                                public readPayloadAsJAXB(arg0: javax.xml.bind.Unmarshaller): java.lang.Object
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
                                public getHeaders<T>(): com.sun.xml.internal.ws.api.message.MessageHeaders
                                public setMessageMedadata<T>(arg0: com.sun.xml.internal.ws.api.message.MessageMetadata | com.sun.xml.internal.ws.api.message.MessageMetadata$$Lambda): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}