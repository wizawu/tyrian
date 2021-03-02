declare namespace javax {
  namespace xml {
    namespace stream {
      namespace util {

        class EventReaderDelegate implements javax.xml.stream.XMLEventReader {
          public constructor()
          public constructor(arg0: javax.xml.stream.XMLEventReader)
          public setParent(arg0: javax.xml.stream.XMLEventReader): void
          public getParent(): javax.xml.stream.XMLEventReader
          public nextEvent(): javax.xml.stream.events.XMLEvent
          public next(): java.lang.Object
          public hasNext(): boolean
          public peek(): javax.xml.stream.events.XMLEvent
          public close(): void
          public getElementText(): java.lang.String
          public nextTag(): javax.xml.stream.events.XMLEvent
          public getProperty(arg0: java.lang.String): java.lang.Object
          public remove(): void
        }

      }
    }
  }
}
