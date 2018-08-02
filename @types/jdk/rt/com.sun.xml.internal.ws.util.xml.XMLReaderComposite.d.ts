declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace util {
                        namespace xml {
                            class XMLReaderComposite implements com.sun.xml.internal.org.jvnet.staxex.XMLStreamReaderEx {
                                protected state: com.sun.xml.internal.ws.util.xml.XMLReaderComposite$State
                                protected elemInfo: com.sun.xml.internal.ws.util.xml.XMLReaderComposite$ElemInfo
                                protected tagInfo: com.sun.xml.internal.ws.encoding.TagInfoset
                                protected children: javax.xml.stream.XMLStreamReader[]
                                protected payloadIndex: int
                                protected payloadReader: javax.xml.stream.XMLStreamReader
                                public constructor(arg0: com.sun.xml.internal.ws.util.xml.XMLReaderComposite$ElemInfo, arg1: javax.xml.stream.XMLStreamReader[])
                                public next(): int
                                public hasNext(): boolean
                                public getElementText(): string
                                public nextTag(): int
                                public getProperty(arg0: java.lang.String | string): java.lang.Object
                                public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                                public close(): void
                                public getNamespaceURI(arg0: java.lang.String | string): string
                                public isStartElement(): boolean
                                public isEndElement(): boolean
                                public isCharacters(): boolean
                                public isWhiteSpace(): boolean
                                public getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                                public getAttributeCount(): int
                                public getAttributeName(arg0: int): javax.xml.namespace.QName
                                public getAttributeNamespace(arg0: int): string
                                public getAttributeLocalName(arg0: int): string
                                public getAttributePrefix(arg0: int): string
                                public getAttributeType(arg0: int): string
                                public getAttributeValue(arg0: int): string
                                public isAttributeSpecified(arg0: int): boolean
                                public getNamespaceCount(): int
                                public getNamespacePrefix(arg0: int): string
                                public getNamespaceURI(arg0: int): string
                                public getNamespaceContext(): com.sun.xml.internal.org.jvnet.staxex.NamespaceContextEx
                                public getEventType(): int
                                public getText(): string
                                public getTextCharacters(): char[]
                                public getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
                                public getTextStart(): int
                                public getTextLength(): int
                                public getEncoding(): string
                                public hasText(): boolean
                                public getLocation(): javax.xml.stream.Location
                                public getName(): javax.xml.namespace.QName
                                public getLocalName(): string
                                public hasName(): boolean
                                public getNamespaceURI(): string
                                public getPrefix(): string
                                public getVersion(): string
                                public isStandalone(): boolean
                                public standaloneSet(): boolean
                                public getCharacterEncodingScheme(): string
                                public getPITarget(): string
                                public getPIData(): string
                                public getElementTextTrim(): string
                                public getPCDATA(): java.lang.CharSequence
                                public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                                public static class: java.lang.Class<any>
                            }
                        }
                    }
                }
            }
        }
    }
}