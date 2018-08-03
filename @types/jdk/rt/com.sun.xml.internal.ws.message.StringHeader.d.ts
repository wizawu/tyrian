declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace message {
                        class StringHeader extends com.sun.xml.internal.ws.message.AbstractHeaderImpl {
                            protected readonly name: javax.xml.namespace.QName
                            protected readonly value: string
                            protected mustUnderstand: boolean
                            protected soapVersion: com.sun.xml.internal.ws.api.SOAPVersion
                            protected static readonly MUST_UNDERSTAND: string
                            protected static readonly S12_MUST_UNDERSTAND_TRUE: string
                            protected static readonly S11_MUST_UNDERSTAND_TRUE: string
                            public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string)
                            public constructor(arg0: javax.xml.namespace.QName, arg1: java.lang.String | string, arg2: com.sun.xml.internal.ws.api.SOAPVersion, arg3: boolean)
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