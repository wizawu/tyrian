declare namespace javax {
  namespace xml {
    namespace stream {

      interface XMLStreamReader extends javax.xml.stream.XMLStreamConstants {
        getProperty(arg0: java.lang.String): java.lang.Object
        next(): int
        require(arg0: int, arg1: java.lang.String, arg2: java.lang.String): void
        getElementText(): java.lang.String
        nextTag(): int
        hasNext(): boolean
        close(): void
        getNamespaceURI(arg0: java.lang.String): java.lang.String
        isStartElement(): boolean
        isEndElement(): boolean
        isCharacters(): boolean
        isWhiteSpace(): boolean
        getAttributeValue(arg0: java.lang.String, arg1: java.lang.String): java.lang.String
        getAttributeCount(): int
        getAttributeName(arg0: int): javax.xml.namespace.QName
        getAttributeNamespace(arg0: int): java.lang.String
        getAttributeLocalName(arg0: int): java.lang.String
        getAttributePrefix(arg0: int): java.lang.String
        getAttributeType(arg0: int): java.lang.String
        getAttributeValue(arg0: int): java.lang.String
        isAttributeSpecified(arg0: int): boolean
        getNamespaceCount(): int
        getNamespacePrefix(arg0: int): java.lang.String
        getNamespaceURI(arg0: int): java.lang.String
        getNamespaceContext(): javax.xml.namespace.NamespaceContext
        getEventType(): int
        getText(): java.lang.String
        getTextCharacters(): char[]
        getTextCharacters(arg0: int, arg1: char[], arg2: int, arg3: int): int
        getTextStart(): int
        getTextLength(): int
        getEncoding(): java.lang.String
        hasText(): boolean
        getLocation(): javax.xml.stream.Location
        getName(): javax.xml.namespace.QName
        getLocalName(): java.lang.String
        hasName(): boolean
        getNamespaceURI(): java.lang.String
        getPrefix(): java.lang.String
        getVersion(): java.lang.String
        isStandalone(): boolean
        standaloneSet(): boolean
        getCharacterEncodingScheme(): java.lang.String
        getPITarget(): java.lang.String
        getPIData(): java.lang.String
      }

    }
  }
}
