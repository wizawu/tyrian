declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {

        interface Characters extends javax.xml.stream.events.XMLEvent {
          getData(): java.lang.String
          isWhiteSpace(): boolean
          isCData(): boolean
          isIgnorableWhiteSpace(): boolean
        }

      }
    }
  }
}
