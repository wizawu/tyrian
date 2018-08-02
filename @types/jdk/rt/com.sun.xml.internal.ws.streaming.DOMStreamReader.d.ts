declare namespace com {
    namespace sun {
        namespace xml {
            namespace internal {
                namespace ws {
                    namespace streaming {
class DOMStreamReader implements javax.xml.stream.XMLStreamReader , javax.xml.namespace.NamespaceContext {
    protected _current: org.w3c.dom.Node
    protected wholeText: string
    protected scopes: com.sun.xml.internal.ws.streaming.DOMStreamReader$Scope[]
    protected depth: int
    protected _state: int
    public constructor()
    public constructor(arg0: org.w3c.dom.Node)
    public setCurrentNode(arg0: org.w3c.dom.Node): void
    public close(): void
    protected splitAttributes(): void
    public getAttributeCount(): int
    public getAttributeLocalName(arg0: int): string
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
    public getNamespaceURI(arg0: int): string
    public getNamespaceURI(): string
    public getNamespaceURI(arg0: java.lang.String | string): string
    public getPrefix(arg0: java.lang.String | string): string
    public getPrefixes(arg0: java.lang.String | string): java.util.Iterator
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
    public hasNext(): boolean
    public hasText(): boolean
    public isAttributeSpecified(arg0: int): boolean
    public isCharacters(): boolean
    public isEndElement(): boolean
    public isStandalone(): boolean
    public isStartElement(): boolean
    public isWhiteSpace(): boolean
    public next(): int
    protected _next(): int
    public nextTag(): int
    public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public standaloneSet(): boolean
    public static class: java.lang.Class<any>
}

                    }
                }
            }
        }
    }
}