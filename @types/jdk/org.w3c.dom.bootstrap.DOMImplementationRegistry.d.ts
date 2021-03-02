declare namespace org {
  namespace w3c {
    namespace dom {
      namespace bootstrap {

        class DOMImplementationRegistry {
          public static readonly PROPERTY: java.lang.String
          public static newInstance(): org.w3c.dom.bootstrap.DOMImplementationRegistry
          public getDOMImplementation(arg0: java.lang.String): org.w3c.dom.DOMImplementation
          public getDOMImplementationList(arg0: java.lang.String): org.w3c.dom.DOMImplementationList
          public addSource(arg0: org.w3c.dom.DOMImplementationSource): void
        }

      }
    }
  }
}
