declare namespace javax {
  namespace xml {
    namespace stream {
      namespace util {

        class StreamReaderDelegate implements javax.xml.stream.XMLStreamReader {
          public constructor()
          public constructor(arg0: javax.xml.stream.XMLStreamReader)
          public setParent(arg0: javax.xml.stream.XMLStreamReader): void
          public getParent(): javax.xml.stream.XMLStreamReader
          public next(): number
          public nextTag(): number
          public getElementText(): java.lang.String
          public require(arg0: number | java.lang.Integer, arg1: java.lang.String | string, arg2: java.lang.String | string): void
          public hasNext(): boolean
          public close(): void
          public getNamespaceURI(arg0: java.lang.String | string): java.lang.String
          public getNamespaceContext(): javax.xml.namespace.NamespaceContext
          public isStartElement(): boolean
          public isEndElement(): boolean
          public isCharacters(): boolean
          public isWhiteSpace(): boolean
          public getAttributeValue(arg0: java.lang.String | string, arg1: java.lang.String | string): java.lang.String
          public getAttributeCount(): number
          public getAttributeName(arg0: number | java.lang.Integer): javax.xml.namespace.QName
          public getAttributePrefix(arg0: number | java.lang.Integer): java.lang.String
          public getAttributeNamespace(arg0: number | java.lang.Integer): java.lang.String
          public getAttributeLocalName(arg0: number | java.lang.Integer): java.lang.String
          public getAttributeType(arg0: number | java.lang.Integer): java.lang.String
          public getAttributeValue(arg0: number | java.lang.Integer): java.lang.String
          public isAttributeSpecified(arg0: number | java.lang.Integer): boolean
          public getNamespaceCount(): number
          public getNamespacePrefix(arg0: number | java.lang.Integer): java.lang.String
          public getNamespaceURI(arg0: number | java.lang.Integer): java.lang.String
          public getEventType(): number
          public getText(): java.lang.String
          public getTextCharacters(arg0: number | java.lang.Integer, arg1: char[], arg2: number | java.lang.Integer, arg3: number | java.lang.Integer): number
          public getTextCharacters(): string[]
          public getTextStart(): number
          public getTextLength(): number
          public getEncoding(): java.lang.String
          public hasText(): boolean
          public getLocation(): javax.xml.stream.Location
          public getName(): javax.xml.namespace.QName
          public getLocalName(): java.lang.String
          public hasName(): boolean
          public getNamespaceURI(): java.lang.String
          public getPrefix(): java.lang.String
          public getVersion(): java.lang.String
          public isStandalone(): boolean
          public standaloneSet(): boolean
          public getCharacterEncodingScheme(): java.lang.String
          public getPITarget(): java.lang.String
          public getPIData(): java.lang.String
          public getProperty(arg0: java.lang.String | string): java.lang.Object
        }

      }
    }
  }
}
