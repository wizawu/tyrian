declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {

        interface LSLoadEvent extends org.w3c.dom.events.Event {
          getNewDocument(): org.w3c.dom.Document
          getInput(): org.w3c.dom.ls.LSInput
        }

      }
    }
  }
}
