declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLTableRowElement extends org.w3c.dom.html.HTMLElement {
          getRowIndex(): int
          getSectionRowIndex(): int
          getCells(): org.w3c.dom.html.HTMLCollection
          getAlign(): java.lang.String
          setAlign(arg0: java.lang.String): void
          getBgColor(): java.lang.String
          setBgColor(arg0: java.lang.String): void
          getCh(): java.lang.String
          setCh(arg0: java.lang.String): void
          getChOff(): java.lang.String
          setChOff(arg0: java.lang.String): void
          getVAlign(): java.lang.String
          setVAlign(arg0: java.lang.String): void
          insertCell(arg0: int): org.w3c.dom.html.HTMLElement
          deleteCell(arg0: int): void
        }

      }
    }
  }
}
