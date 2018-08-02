declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace api {
                        namespace addressing {
                            class OutboundReferenceParameterHeader extends com.sun.xml.internal.ws.message.AbstractHeaderImpl {
                                public getNamespaceURI(): string
                                public getLocalPart(): string
                                public getAttribute(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public readHeader(): javax.xml.stream.XMLStreamReader
                                public writeTo(arg0: javax.xml.stream.XMLStreamWriter): void
                                public writeTo(arg0: javax.xml.soap.SOAPMessage): void
                                public writeTo(arg0: org.xml.sax.ContentHandler, arg1: org.xml.sax.ErrorHandler): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}