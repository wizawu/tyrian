declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {
        interface LSProgressEvent extends org.w3c.dom.events.Event {
          getInput(): org.w3c.dom.ls.LSInput
          getPosition(): number
          getTotalSize(): number
        }
      }
    }
  }
}
