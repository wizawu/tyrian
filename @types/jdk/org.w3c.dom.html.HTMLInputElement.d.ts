declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {
        interface HTMLInputElement extends org.w3c.dom.html.HTMLElement {
          getDefaultValue(): java.lang.String
          setDefaultValue(arg0: java.lang.String | string): void
          getDefaultChecked(): boolean
          setDefaultChecked(arg0: boolean | java.lang.Boolean): void
          getForm(): org.w3c.dom.html.HTMLFormElement
          getAccept(): java.lang.String
          setAccept(arg0: java.lang.String | string): void
          getAccessKey(): java.lang.String
          setAccessKey(arg0: java.lang.String | string): void
          getAlign(): java.lang.String
          setAlign(arg0: java.lang.String | string): void
          getAlt(): java.lang.String
          setAlt(arg0: java.lang.String | string): void
          getChecked(): boolean
          setChecked(arg0: boolean | java.lang.Boolean): void
          getDisabled(): boolean
          setDisabled(arg0: boolean | java.lang.Boolean): void
          getMaxLength(): number
          setMaxLength(arg0: number | java.lang.Integer): void
          getName(): java.lang.String
          setName(arg0: java.lang.String | string): void
          getReadOnly(): boolean
          setReadOnly(arg0: boolean | java.lang.Boolean): void
          getSize(): java.lang.String
          setSize(arg0: java.lang.String | string): void
          getSrc(): java.lang.String
          setSrc(arg0: java.lang.String | string): void
          getTabIndex(): number
          setTabIndex(arg0: number | java.lang.Integer): void
          getType(): java.lang.String
          getUseMap(): java.lang.String
          setUseMap(arg0: java.lang.String | string): void
          getValue(): java.lang.String
          setValue(arg0: java.lang.String | string): void
          blur(): void
          focus(): void
          select(): void
          click(): void
        }
      }
    }
  }
}
