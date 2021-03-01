declare namespace javax {
  namespace xml {
    namespace stream {
      namespace util {

        interface XMLEventAllocator {

          newInstance(): javax.xml.stream.util.XMLEventAllocator
          allocate(arg0: javax.xml.stream.XMLStreamReader): javax.xml.stream.events.XMLEvent
          allocate(arg0: javax.xml.stream.XMLStreamReader, arg1: javax.xml.stream.util.XMLEventConsumer): void
        }

      }
    }
  }
}
