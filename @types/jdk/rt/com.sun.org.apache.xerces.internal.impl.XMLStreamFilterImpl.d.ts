declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
class XMLStreamFilterImpl implements javax.xml.stream.XMLStreamReader {
    public constructor(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.StreamFilter | javax.xml.stream.StreamFilter$$Lambda)
    protected setStreamFilter(arg0: javax.xml.stream.StreamFilter | javax.xml.stream.StreamFilter$$Lambda): void
    public next(): int
    public nextTag(): int
    public hasNext(): boolean
    public close(): void
    public getAttributeCount(): int
    public getAttributeName(arg0: int): javax.xml.namespace.QName
    public getAttributeNamespace(arg0: int): string
    public getAttributePrefix(arg0: int): string
    public getAttributeType(arg0: int): string
    public getAttributeValue(arg0: int): string
    public getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getCharacterEncodingScheme(): string
    public getElementText(): string
    public getEncoding(): string
    public getEventType(): int
    public getLocalName(): string
    public getLocation(): javax.xml.stream.Location
    public getName(): javax.xml.namespace.QName
    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
    public getNamespaceCount(): int
    public getNamespacePrefix(arg0: int): string
    public getNamespaceURI(): string
    public getNamespaceURI(arg0: int): string
    public getNamespaceURI(arg0: java.lang.String | string): string
    public getPIData(): string
    public getPITarget(): string
    public getPrefix(): string
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public getText(): string
    public getTextCharacters(): char[]
    public getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
    public getTextLength(): int
    public getTextStart(): int
    public getVersion(): string
    public hasName(): boolean
    public hasText(): boolean
    public isAttributeSpecified(arg0: int): boolean
    public isCharacters(): boolean
    public isEndElement(): boolean
    public isStandalone(): boolean
    public isStartElement(): boolean
    public isWhiteSpace(): boolean
    public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public standaloneSet(): boolean
    public getAttributeLocalName(arg0: int): string
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}