declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLOptionElement extends org.w3c.dom.html.HTMLElement {
          getForm(): org.w3c.dom.html.HTMLFormElement
          getDefaultSelected(): boolean
          setDefaultSelected(arg0: boolean): void
          getText(): java.lang.String
          getIndex(): int
          getDisabled(): boolean
          setDisabled(arg0: boolean): void
          getLabel(): java.lang.String
          setLabel(arg0: java.lang.String): void
          getSelected(): boolean
          setSelected(arg0: boolean): void
          getValue(): java.lang.String
          setValue(arg0: java.lang.String): void
        }

      }
    }
  }
}
