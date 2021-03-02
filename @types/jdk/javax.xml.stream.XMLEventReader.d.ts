declare namespace javax {
  namespace xml {
    namespace stream {

      interface XMLEventReader extends java.util.Iterator<java.lang.Object> {
        nextEvent(): javax.xml.stream.events.XMLEvent
        hasNext(): boolean
        peek(): javax.xml.stream.events.XMLEvent
        getElementText(): java.lang.String
        nextTag(): javax.xml.stream.events.XMLEvent
        getProperty(arg0: java.lang.String): java.lang.Object
        close(): void
      }

    }
  }
}
