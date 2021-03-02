declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLTextAreaElement extends org.w3c.dom.html.HTMLElement {
          getDefaultValue(): java.lang.String
          setDefaultValue(arg0: java.lang.String | string): void
          getForm(): org.w3c.dom.html.HTMLFormElement
          getAccessKey(): java.lang.String
          setAccessKey(arg0: java.lang.String | string): void
          getCols(): number
          setCols(arg0: number | java.lang.Integer): void
          getDisabled(): boolean
          setDisabled(arg0: boolean | java.lang.Boolean): void
          getName(): java.lang.String
          setName(arg0: java.lang.String | string): void
          getReadOnly(): boolean
          setReadOnly(arg0: boolean | java.lang.Boolean): void
          getRows(): number
          setRows(arg0: number | java.lang.Integer): void
          getTabIndex(): number
          setTabIndex(arg0: number | java.lang.Integer): void
          getType(): java.lang.String
          getValue(): java.lang.String
          setValue(arg0: java.lang.String | string): void
          blur(): void
          focus(): void
          select(): void
        }

      }
    }
  }
}
