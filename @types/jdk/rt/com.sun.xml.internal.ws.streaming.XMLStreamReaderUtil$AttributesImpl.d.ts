declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace streaming {
                        class XMLStreamReaderUtil$AttributesImpl implements com.sun.xml.internal.ws.streaming.Attributes {
                            public constructor(arg0: javax.xml.stream.XMLStreamReader)
                            public getLength(): int
                            public getLocalName(arg0: int): string
                            public getName(arg0: int): javax.xml.namespace.QName
                            public getPrefix(arg0: int): string
                            public getURI(arg0: int): string
                            public getValue(arg0: int): string
                            public getValue(arg0: javax.xml.namespace.QName): string
                            public getValue(arg0: java.lang.String | string): string
                            public getValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                            public isNamespaceDeclaration(arg0: int): boolean
                            public getIndex(arg0: javax.xml.namespace.QName): int
                            public getIndex(arg0: java.lang.String | string): int
                            public getIndex(arg0: java.lang.String | string, arg1: java.lang.String | string): int
                            public static class: java.lang.Class<any>
                        }
                    }
                }
            }
        }
    }
}