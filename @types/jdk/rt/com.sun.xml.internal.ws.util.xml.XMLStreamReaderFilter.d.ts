declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace xml {
                            class XMLStreamReaderFilter implements com.sun.xml.internal.ws.api.streaming.XMLStreamReaderFactory$RecycleAware , javax.xml.stream.XMLStreamReader {
                                protected reader: javax.xml.stream.XMLStreamReader
                                public constructor(arg0: javax.xml.stream.XMLStreamReader)
                                public onRecycled(): void
                                public getAttributeCount(): int
                                public getEventType(): int
                                public getNamespaceCount(): int
                                public getTextLength(): int
                                public getTextStart(): int
                                public next(): int
                                public nextTag(): int
                                public close(): void
                                public hasName(): boolean
                                public hasNext(): boolean
                                public hasText(): boolean
                                public isCharacters(): boolean
                                public isEndElement(): boolean
                                public isStandalone(): boolean
                                public isStartElement(): boolean
                                public isWhiteSpace(): boolean
                                public standaloneSet(): boolean
                                public getTextCharacters(): char[]
                                public isAttributeSpecified(arg0: int): boolean
                                public getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
                                public getCharacterEncodingScheme(): string
                                public getElementText(): string
                                public getEncoding(): string
                                public getLocalName(): string
                                public getNamespaceURI(): string
                                public getPIData(): string
                                public getPITarget(): string
                                public getPrefix(): string
                                public getText(): string
                                public getVersion(): string
                                public getAttributeLocalName(arg0: int): string
                                public getAttributeNamespace(arg0: int): string
                                public getAttributePrefix(arg0: int): string
                                public getAttributeType(arg0: int): string
                                public getAttributeValue(arg0: int): string
                                public getNamespacePrefix(arg0: int): string
                                public getNamespaceURI(arg0: int): string
                                public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                                public getName(): javax.xml.namespace.QName
                                public getAttributeName(arg0: int): javax.xml.namespace.QName
                                public getLocation(): javax.xml.stream.Location
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public getNamespaceURI(arg0: java.lang.String | string): string
                                public getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}