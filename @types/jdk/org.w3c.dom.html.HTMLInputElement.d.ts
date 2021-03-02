declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLInputElement extends org.w3c.dom.html.HTMLElement {
          getDefaultValue(): java.lang.String
          setDefaultValue(arg0: java.lang.String): void
          getDefaultChecked(): boolean
          setDefaultChecked(arg0: boolean): void
          getForm(): org.w3c.dom.html.HTMLFormElement
          getAccept(): java.lang.String
          setAccept(arg0: java.lang.String): void
          getAccessKey(): java.lang.String
          setAccessKey(arg0: java.lang.String): void
          getAlign(): java.lang.String
          setAlign(arg0: java.lang.String): void
          getAlt(): java.lang.String
          setAlt(arg0: java.lang.String): void
          getChecked(): boolean
          setChecked(arg0: boolean): void
          getDisabled(): boolean
          setDisabled(arg0: boolean): void
          getMaxLength(): int
          setMaxLength(arg0: int): void
          getName(): java.lang.String
          setName(arg0: java.lang.String): void
          getReadOnly(): boolean
          setReadOnly(arg0: boolean): void
          getSize(): java.lang.String
          setSize(arg0: java.lang.String): void
          getSrc(): java.lang.String
          setSrc(arg0: java.lang.String): void
          getTabIndex(): int
          setTabIndex(arg0: int): void
          getType(): java.lang.String
          getUseMap(): java.lang.String
          setUseMap(arg0: java.lang.String): void
          getValue(): java.lang.String
          setValue(arg0: java.lang.String): void
          blur(): void
          focus(): void
          select(): void
          click(): void
        }

      }
    }
  }
}
