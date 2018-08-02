declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace fastinfoset {
                    namespace stax {
                        namespace events {
                            class StAXEventWriter implements javax.xml.stream.XMLEventWriter {
                                public constructor(arg0: javax.xml.stream.XMLStreamWriter)
                                public flush(): void
                                public close(): void
                                public add(arg0: javax.xml.stream.XMLEventReader): void
                                public add(arg0: javax.xml.stream.events.XMLEvent): void
                                public getPrefix(arg0: java.lang.String | string): string
                                public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                                public setDefaultNamespace(arg0: java.lang.String | string): void
                                public setNamespaceContext(arg0: javax.xml.namespace.NamespaceContext): void
                                public setPrefix(arg0: java.lang.String | string, arg1: java.lang.String | string): void
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}