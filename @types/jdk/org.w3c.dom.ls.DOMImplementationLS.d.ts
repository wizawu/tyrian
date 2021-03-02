declare namespace org {
  namespace w3c {
    namespace dom {
      namespace ls {

        interface DOMImplementationLS {
          public static readonly MODE_SYNCHRONOUS: short
          public static readonly MODE_ASYNCHRONOUS: short
          createLSParser(arg0: short, arg1: java.lang.String): org.w3c.dom.ls.LSParser
          createLSSerializer(): org.w3c.dom.ls.LSSerializer
          createLSInput(): org.w3c.dom.ls.LSInput
          createLSOutput(): org.w3c.dom.ls.LSOutput
        }

      }
    }
  }
}
