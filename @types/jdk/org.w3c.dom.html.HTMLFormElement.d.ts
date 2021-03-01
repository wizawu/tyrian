declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLFormElement extends org.w3c.dom.html.HTMLElement {

          getElements(): org.w3c.dom.html.HTMLCollection
          getLength(): int
          getName(): java.lang.String
          setName(arg0: java.lang.String): void
          getAcceptCharset(): java.lang.String
          setAcceptCharset(arg0: java.lang.String): void
          getAction(): java.lang.String
          setAction(arg0: java.lang.String): void
          getEnctype(): java.lang.String
          setEnctype(arg0: java.lang.String): void
          getMethod(): java.lang.String
          setMethod(arg0: java.lang.String): void
          getTarget(): java.lang.String
          setTarget(arg0: java.lang.String): void
          submit(): void
          reset(): void
        }

      }
    }
  }
}
