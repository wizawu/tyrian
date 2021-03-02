declare namespace org {
  namespace w3c {
    namespace dom {

      interface DOMConfiguration {
        setParameter(arg0: java.lang.String | string, arg1: java.lang.Object | any): void
        getParameter(arg0: java.lang.String | string): java.lang.Object
        canSetParameter(arg0: java.lang.String | string, arg1: java.lang.Object | any): boolean
        getParameterNames(): org.w3c.dom.DOMStringList
      }

    }
  }
}
