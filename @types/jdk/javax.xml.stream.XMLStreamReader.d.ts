declare namespace javax {
  namespace xml {
    namespace stream {
      interface XMLStreamReader extends javax.xml.stream.XMLStreamConstants {
        getProperty(arg0: java.lang.String | string): java.lang.Object
        next(): number
        require(
          arg0: number | java.lang.Integer,
          arg1: java.lang.String | string,
          arg2: java.lang.String | string
        ): void
        getElementText(): java.lang.String
        nextTag(): number
        hasNext(): boolean
        close(): void
        getNamespaceURI(arg0: java.lang.String | string): java.lang.String
        isStartElement(): boolean
        isEndElement(): boolean
        isCharacters(): boolean
        isWhiteSpace(): boolean
        getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
        getAttributeCount(): number
        getAttributeName(arg0: number | java.lang.Integer): javax.xml.namespace.QName
        getAttributeNamespace(arg0: number | java.lang.Integer): java.lang.String
        getAttributeLocalName(arg0: number | java.lang.Integer): java.lang.String
        getAttributePrefix(arg0: number | java.lang.Integer): java.lang.String
        getAttributeType(arg0: number | java.lang.Integer): java.lang.String
        getAttributeValue(arg0: number | java.lang.Integer): java.lang.String
        isAttributeSpecified(arg0: number | java.lang.Integer): boolean
        getNamespaceCount(): number
        getNamespacePrefix(arg0: number | java.lang.Integer): java.lang.String
        getNamespaceURI(arg0: number | java.lang.Integer): java.lang.String
        getNamespaceContext(): javax.xml.namespace.NamespaceContext
        getEventType(): number
        getText(): java.lang.String
        getTextCharacters(): string[]
        getTextCharacters(
          arg0: number | java.lang.Integer,
          arg1: string[] | java.lang.Character[],
          arg2: number | java.lang.Integer,
          arg3: number | java.lang.Integer
        ): number
        getTextStart(): number
        getTextLength(): number
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
