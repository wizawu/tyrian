declare namespace javax {
    namespace xml {
        namespace stream {
interface XMLStreamReader extends javax.xml.stream.XMLStreamConstants {
    getProperty(arg0: java.lang.String | string): java.lang.Object
    next(): int
    require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    getElementText(): string
    nextTag(): int
    hasNext(): boolean
    close(): void
    getNamespaceURI(arg0: java.lang.String | string): string
    isStartElement(): boolean
    isEndElement(): boolean
    isCharacters(): boolean
    isWhiteSpace(): boolean
    getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    getAttributeCount(): int
    getAttributeName(arg0: int): javax.xml.namespace.QName
    getAttributeNamespace(arg0: int): string
    getAttributeLocalName(arg0: int): string
    getAttributePrefix(arg0: int): string
    getAttributeType(arg0: int): string
    getAttributeValue(arg0: int): string
    isAttributeSpecified(arg0: int): boolean
    getNamespaceCount(): int
    getNamespacePrefix(arg0: int): string
    getNamespaceURI(arg0: int): string
    getNamespaceContext(): javax.xml.namespace.NamespaceContext
    getEventType(): int
    getText(): string
    getTextCharacters(): char[]
    getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
    getTextStart(): int
    getTextLength(): int
    getEncoding(): string
    hasText(): boolean
    getLocation(): javax.xml.stream.Location
    getName(): javax.xml.namespace.QName
    getLocalName(): string
    hasName(): boolean
    getNamespaceURI(): string
    getPrefix(): string
    getVersion(): string
    isStandalone(): boolean
    standaloneSet(): boolean
    getCharacterEncodingScheme(): string
    getPITarget(): string
    getPIData(): string
}

        }
    }
}