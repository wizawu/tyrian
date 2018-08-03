declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace message {
                            interface Header {
                                isIgnorable(arg0: com.sun.xml.internal.ws.api.SOAPVersion, arg1: java.util.Set<java.lang.String>): boolean
                                getRole(arg0: com.sun.xml.internal.ws.api.SOAPVersion): string
                                isRelay(): boolean
                                getNamespaceURI(): string
                                getLocalPart(): string
                                getAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                getAttribute(arg0: javax.xml.namespace.QName): string
                                readHeader(): javax.xml.stream.XMLStreamReader
                                readAsJAXB<T>(arg0: javax.xml.bind.Unmarshaller): T
                                readAsJAXB<T>(arg0: com.sun.xml.internal.bind.api.Bridge<T>): T
                                readAsJAXB<T>(arg0: com.sun.xml.internal.ws.spi.db.XMLBridge<T>): T
                                readAsEPR<T>(arg0: com.sun.xml.internal.ws.api.addressing.AddressingVersion): com.sun.xml.internal.ws.api.addressing.WSEndpointReference
                                writeTo<T>(arg0: javax.xml.stream.XMLStreamWriter): void
                                writeTo<T>(arg0: javax.xml.soap.SOAPMessage): void
                                writeTo<T>(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                                getStringContent<T>(): string
                            }
                        }
                    }
                }
            }
        }
    }
}