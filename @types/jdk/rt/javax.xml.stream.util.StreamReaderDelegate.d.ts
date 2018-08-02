declare namespace javax {
    namespace xml {
        namespace stream {
            namespace util {
                class StreamReaderDelegate implements javax.xml.stream.XMLStreamReader {
                    public constructor()
                    public constructor(arg0: javax.xml.stream.XMLStreamReader)
                    public setParent(arg0: javax.xml.stream.XMLStreamReader): void
                    public getParent(): javax.xml.stream.XMLStreamReader
                    public next(): int
                    public nextTag(): int
                    public getElementText(): string
                    public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
                    public hasNext(): boolean
                    public close(): void
                    public getNamespaceURI(arg0: java.lang.String | string): string
                    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
                    public isStartElement(): boolean
                    public isEndElement(): boolean
                    public isCharacters(): boolean
                    public isWhiteSpace(): boolean
                    public getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
                    public getAttributeCount(): int
                    public getAttributeName(arg0: int): javax.xml.namespace.QName
                    public getAttributePrefix(arg0: int): string
                    public getAttributeNamespace(arg0: int): string
                    public getAttributeLocalName(arg0: int): string
                    public getAttributeType(arg0: int): string
                    public getAttributeValue(arg0: int): string
                    public isAttributeSpecified(arg0: int): boolean
                    public getNamespaceCount(): int
                    public getNamespacePrefix(arg0: int): string
                    public getNamespaceURI(arg0: int): string
                    public getEventType(): int
                    public getText(): string
                    public getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
                    public getTextCharacters(): char[]
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
                    public getProperty(arg0: java.lang.String | string): java.lang.Object
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}