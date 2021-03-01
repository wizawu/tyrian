declare namespace javax {
  namespace xml {
    namespace stream {
      namespace events {

        interface StartDocument extends javax.xml.stream.events.XMLEvent {

          getSystemId(): java.lang.String
          getCharacterEncodingScheme(): java.lang.String
          encodingSet(): boolean
          isStandalone(): boolean
          standaloneSet(): boolean
          getVersion(): java.lang.String
        }

      }
    }
  }
}
