declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        namespace stream {
                            abstract class StreamHeader extends com.sun.xml.internal.ws.message.AbstractHeaderImpl {
                                protected readonly _mark: com.sun.xml.internal.stream.buffer.XMLStreamBuffer
                                protected _isMustUnderstand: boolean
                                protected _role: string
                                protected _isRelay: boolean
                                protected _localName: string
                                protected _namespaceURI: string
                                protected constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: com.sun.xml.internal.stream.buffer.XMLStreamBuffer)
                                protected constructor(arg0: javax.xml.stream.XMLStreamReader)
                                public isIgnorable(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: java.util.Set<java.lang.String>): boolean
                                public getRole(arg0: com.sun.xml.internal.ws.api.SOAPVersion): string
                                public isRelay(): boolean
                                public getNamespaceURI(): string
                                public getLocalPart(): string
                                public getAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public readHeader(): javax.xml.stream.XMLStreamReader
                                public writeTo(arg0: javax.xml.stream.XMLStreamWriter): void
                                public writeTo(arg0: javax.xml.soap.SOAPMessage): void
                                public writeTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                                public readAsEPR(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                protected abstract processHeaderAttributes(arg0: javax.xml.stream.XMLStreamReader): com.sun.istack.internal.FinalArrayList<com.sun.xml.internal.ws.message.stream.StreamHeader$Attribute>
                                public static class: java.lang.Class<any>
                            }
                            interface StreamHeader$$Lambda extends com.sun.xml.internal.ws.message.AbstractHeaderImpl {
                                (arg0: javax.xml.stream.XMLStreamReader): com.sun.istack.internal.FinalArrayList<com.sun.xml.internal.ws.message.stream.StreamHeader$Attribute>
                            }
                        }
                    }
                }
            }
        }
    }
}