declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {
        interface HTMLTableElement extends org.w3c.dom.html.HTMLElement {
          getCaption(): org.w3c.dom.html.HTMLTableCaptionElement
          setCaption(arg0: org.w3c.dom.html.HTMLTableCaptionElement): void
          getTHead(): org.w3c.dom.html.HTMLTableSectionElement
          setTHead(arg0: org.w3c.dom.html.HTMLTableSectionElement): void
          getTFoot(): org.w3c.dom.html.HTMLTableSectionElement
          setTFoot(arg0: org.w3c.dom.html.HTMLTableSectionElement): void
          getRows(): org.w3c.dom.html.HTMLCollection
          getTBodies(): org.w3c.dom.html.HTMLCollection
          getAlign(): java.lang.String
          setAlign(arg0: java.lang.String | string): void
          getBgColor(): java.lang.String
          setBgColor(arg0: java.lang.String | string): void
          getBorder(): java.lang.String
          setBorder(arg0: java.lang.String | string): void
          getCellPadding(): java.lang.String
          setCellPadding(arg0: java.lang.String | string): void
          getCellSpacing(): java.lang.String
          setCellSpacing(arg0: java.lang.String | string): void
          getFrame(): java.lang.String
          setFrame(arg0: java.lang.String | string): void
          getRules(): java.lang.String
          setRules(arg0: java.lang.String | string): void
          getSummary(): java.lang.String
          setSummary(arg0: java.lang.String | string): void
          getWidth(): java.lang.String
          setWidth(arg0: java.lang.String | string): void
          createTHead(): org.w3c.dom.html.HTMLElement
          deleteTHead(): void
          createTFoot(): org.w3c.dom.html.HTMLElement
          deleteTFoot(): void
          createCaption(): org.w3c.dom.html.HTMLElement
          deleteCaption(): void
          insertRow(arg0: number | java.lang.Integer): org.w3c.dom.html.HTMLElement
          deleteRow(arg0: number | java.lang.Integer): void
        }
      }
    }
  }
}
