declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLTextAreaElement extends org.w3c.dom.html.HTMLElement {

          getDefaultValue(): java.lang.String
          setDefaultValue(arg0: java.lang.String): void
          getForm(): org.w3c.dom.html.HTMLFormElement
          getAccessKey(): java.lang.String
          setAccessKey(arg0: java.lang.String): void
          getCols(): int
          setCols(arg0: int): void
          getDisabled(): boolean
          setDisabled(arg0: boolean): void
          getName(): java.lang.String
          setName(arg0: java.lang.String): void
          getReadOnly(): boolean
          setReadOnly(arg0: boolean): void
          getRows(): int
          setRows(arg0: int): void
          getTabIndex(): int
          setTabIndex(arg0: int): void
          getType(): java.lang.String
          getValue(): java.lang.String
          setValue(arg0: java.lang.String): void
          blur(): void
          focus(): void
          select(): void
        }

      }
    }
  }
}
