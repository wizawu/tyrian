declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLOptionElement extends org.w3c.dom.html.HTMLElement {
                    getForm(): org.w3c.dom.html.HTMLFormElement
                    getDefaultSelected(): boolean
                    setDefaultSelected(arg0: boolean): void
                    getText(): string
                    getIndex(): int
                    getDisabled(): boolean
                    setDisabled(arg0: boolean): void
                    getLabel(): string
                    setLabel(arg0: java.lang.String | string): void
                    getSelected(): boolean
                    setSelected(arg0: boolean): void
                    getValue(): string
                    setValue(arg0: java.lang.String | string): void
                }
            }
        }
    }
}