declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {
        interface HTMLTableSectionElement extends org.w3c.dom.html.HTMLElement {
          getAlign(): java.lang.String
          setAlign(arg0: java.lang.String | string): void
          getCh(): java.lang.String
          setCh(arg0: java.lang.String | string): void
          getChOff(): java.lang.String
          setChOff(arg0: java.lang.String | string): void
          getVAlign(): java.lang.String
          setVAlign(arg0: java.lang.String | string): void
          getRows(): org.w3c.dom.html.HTMLCollection
          insertRow(arg0: number | java.lang.Integer): org.w3c.dom.html.HTMLElement
          deleteRow(arg0: number | java.lang.Integer): void
        }
      }
    }
  }
}
