declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {
        interface ProcessingInstruction extends javax.xml.stream.events.XMLEvent {
          getTarget(): java.lang.String
          getData(): java.lang.String
        }
      }
    }
  }
}
