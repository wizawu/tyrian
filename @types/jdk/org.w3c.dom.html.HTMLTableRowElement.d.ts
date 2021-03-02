declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLTableRowElement extends org.w3c.dom.html.HTMLElement {
          getRowIndex(): number
          getSectionRowIndex(): number
          getCells(): org.w3c.dom.html.HTMLCollection
          getAlign(): java.lang.String
          setAlign(arg0: java.lang.String | string): void
          getBgColor(): java.lang.String
          setBgColor(arg0: java.lang.String | string): void
          getCh(): java.lang.String
          setCh(arg0: java.lang.String | string): void
          getChOff(): java.lang.String
          setChOff(arg0: java.lang.String | string): void
          getVAlign(): java.lang.String
          setVAlign(arg0: java.lang.String | string): void
          insertCell(arg0: number | java.lang.Integer): org.w3c.dom.html.HTMLElement
          deleteCell(arg0: number | java.lang.Integer): void
        }

      }
    }
  }
}
