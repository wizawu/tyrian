declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {
        interface HTMLButtonElement extends org.w3c.dom.html.HTMLElement {
          getForm(): org.w3c.dom.html.HTMLFormElement
          getAccessKey(): java.lang.String
          setAccessKey(arg0: java.lang.String | string): void
          getDisabled(): boolean
          setDisabled(arg0: boolean | java.lang.Boolean): void
          getName(): java.lang.String
          setName(arg0: java.lang.String | string): void
          getTabIndex(): number
          setTabIndex(arg0: number | java.lang.Integer): void
          getType(): java.lang.String
          getValue(): java.lang.String
          setValue(arg0: java.lang.String | string): void
        }
      }
    }
  }
}
