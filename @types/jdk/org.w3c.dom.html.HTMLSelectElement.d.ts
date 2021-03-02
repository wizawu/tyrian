declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLSelectElement extends org.w3c.dom.html.HTMLElement {
          getType(): java.lang.String
          getSelectedIndex(): number
          setSelectedIndex(arg0: number | java.lang.Integer): void
          getValue(): java.lang.String
          setValue(arg0: java.lang.String | string): void
          getLength(): number
          getForm(): org.w3c.dom.html.HTMLFormElement
          getOptions(): org.w3c.dom.html.HTMLCollection
          getDisabled(): boolean
          setDisabled(arg0: boolean | java.lang.Boolean): void
          getMultiple(): boolean
          setMultiple(arg0: boolean | java.lang.Boolean): void
          getName(): java.lang.String
          setName(arg0: java.lang.String | string): void
          getSize(): number
          setSize(arg0: number | java.lang.Integer): void
          getTabIndex(): number
          setTabIndex(arg0: number | java.lang.Integer): void
          add(arg0: org.w3c.dom.html.HTMLElement, arg1: org.w3c.dom.html.HTMLElement): void
          remove(arg0: number | java.lang.Integer): void
          blur(): void
          focus(): void
        }

      }
    }
  }
}
