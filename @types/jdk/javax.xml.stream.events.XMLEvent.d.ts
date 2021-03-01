declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {

        interface XMLEvent extends javax.xml.stream.XMLStreamConstants {

          getEventType(): int
          getLocation(): javax.xml.stream.Location
          isStartElement(): boolean
          isAttribute(): boolean
          isNamespace(): boolean
          isEndElement(): boolean
          isEntityReference(): boolean
          isProcessingInstruction(): boolean
          isCharacters(): boolean
          isStartDocument(): boolean
          isEndDocument(): boolean
          asStartElement(): javax.xml.stream.events.StartElement
          asEndElement(): javax.xml.stream.events.EndElement
          asCharacters(): javax.xml.stream.events.Characters
          getSchemaType(): javax.xml.namespace.QName
          writeAsEncodedUnicode(arg0: java.io.Writer): void
        }

      }
    }
  }
}
