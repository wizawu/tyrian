declare namespace com {
    namespace sun {
        namespace org {
            namespace apache {
                namespace xerces {
                    namespace internal {
                        namespace impl {
class XMLStreamReaderImpl implements javax.xml.stream.XMLStreamReader {
    protected static ENTITY_MANAGER: string
    protected static ERROR_REPORTER: string
    protected static SYMBOL_TABLE: string
    protected static READER_IN_DEFINED_STATE: string
    protected fScanner: com.sun.org.apache.xerces.internal.impl.XMLDocumentScannerImpl
    protected fNamespaceContextWrapper: com.sun.org.apache.xerces.internal.util.NamespaceContextWrapper
    protected fEntityManager: com.sun.org.apache.xerces.internal.impl.XMLEntityManager
    protected fErrorReporter: com.sun.xml.internal.stream.StaxErrorReporter
    protected fEntityScanner: com.sun.org.apache.xerces.internal.impl.XMLEntityScanner
    protected fInputSource: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource
    protected fPropertyManager: com.sun.org.apache.xerces.internal.impl.PropertyManager
    public constructor(arg0: java.io.InputStream, arg1: com.sun.org.apache.xerces.internal.impl.PropertyManager)
    public getScanner(): com.sun.org.apache.xerces.internal.impl.XMLDocumentScannerImpl
    public constructor(arg0: java.lang.String | string, arg1: com.sun.org.apache.xerces.internal.impl.PropertyManager)
    public constructor(arg0: java.io.InputStream, arg1: java.lang.String | string, arg2: com.sun.org.apache.xerces.internal.impl.PropertyManager)
    public constructor(arg0: java.io.Reader, arg1: com.sun.org.apache.xerces.internal.impl.PropertyManager)
    public constructor(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource, arg1: com.sun.org.apache.xerces.internal.impl.PropertyManager)
    public setInputSource(arg0: com.sun.org.apache.xerces.internal.xni.parser.XMLInputSource): void
    public canReuse(): boolean
    public reset(): void
    public close(): void
    public getCharacterEncodingScheme(): string
    public getColumnNumber(): int
    public getEncoding(): string
    public getEventType(): int
    public getLineNumber(): int
    public getLocalName(): string
    public getNamespaceURI(): string
    public getPIData(): string
    public getPITarget(): string
    public getPrefix(): string
    public getTextCharacters(): char[]
    public getTextLength(): int
    public getTextStart(): int
    public getValue(): string
    public getVersion(): string
    public hasAttributes(): boolean
    public hasName(): boolean
    public hasNext(): boolean
    public hasValue(): boolean
    public isEndElement(): boolean
    public isStandalone(): boolean
    public isStartElement(): boolean
    public isWhiteSpace(): boolean
    public next(): int
    public getAttributeCount(): int
    public getAttributeName(arg0: int): javax.xml.namespace.QName
    public getAttributeLocalName(arg0: int): string
    public getAttributeNamespace(arg0: int): string
    public getAttributePrefix(arg0: int): string
    public getAttributeQName(arg0: int): javax.xml.namespace.QName
    public getAttributeType(arg0: int): string
    public getAttributeValue(arg0: int): string
    public getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): string
    public getElementText(): string
    public getLocation(): javax.xml.stream.Location
    public getName(): javax.xml.namespace.QName
    public getNamespaceContext(): javax.xml.namespace.NamespaceContext
    public getNamespaceCount(): int
    public getNamespacePrefix(arg0: int): string
    public getNamespaceURI(arg0: int): string
    public getProperty(arg0: java.lang.String | string): java.lang.Object
    public getText(): string
    public require(arg0: int, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    public getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
    public hasText(): boolean
    public isAttributeSpecified(arg0: int): boolean
    public isCharacters(): boolean
    public nextTag(): int
    public standaloneSet(): boolean
    public convertXNIQNametoJavaxQName(arg0: com.sun.org.apache.xerces.internal.xni.QName): javax.xml.namespace.QName
    public getNamespaceURI(arg0: java.lang.String | string): string
    protected setPropertyManager(arg0: com.sun.org.apache.xerces.internal.impl.PropertyManager): void
    protected getPropertyManager(): com.sun.org.apache.xerces.internal.impl.PropertyManager
    protected getEntityDecls(): java.util.List
    protected getNotationDecls(): java.util.List
    public static class: java.lang.Class<any>
}

                        }
                    }
                }
            }
        }
    }
}