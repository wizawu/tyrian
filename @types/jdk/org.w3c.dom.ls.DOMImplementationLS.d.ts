declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {
        interface DOMImplementationLS {
          readonly MODE_SYNCHRONOUS: short
          readonly MODE_ASYNCHRONOUS: short
          createLSParser(arg0: number | java.lang.Short, arg1: java.lang.String | string): org.w3c.dom.ls.LSParser
          createLSSerializer(): org.w3c.dom.ls.LSSerializer
          createLSInput(): org.w3c.dom.ls.LSInput
          createLSOutput(): org.w3c.dom.ls.LSOutput
        }
      }
    }
  }
}
