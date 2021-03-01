declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLDocument extends org.w3c.dom.Document {

          getTitle(): java.lang.String
          setTitle(arg0: java.lang.String): void
          getReferrer(): java.lang.String
          getDomain(): java.lang.String
          getURL(): java.lang.String
          getBody(): org.w3c.dom.html.HTMLElement
          setBody(arg0: org.w3c.dom.html.HTMLElement): void
          getImages(): org.w3c.dom.html.HTMLCollection
          getApplets(): org.w3c.dom.html.HTMLCollection
          getLinks(): org.w3c.dom.html.HTMLCollection
          getForms(): org.w3c.dom.html.HTMLCollection
          getAnchors(): org.w3c.dom.html.HTMLCollection
          getCookie(): java.lang.String
          setCookie(arg0: java.lang.String): void
          open(): void
          close(): void
          write(arg0: java.lang.String): void
          writeln(arg0: java.lang.String): void
          getElementsByName(arg0: java.lang.String): org.w3c.dom.NodeList
        }

      }
    }
  }
}
