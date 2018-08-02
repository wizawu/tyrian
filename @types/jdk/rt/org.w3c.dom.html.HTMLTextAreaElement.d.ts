declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLTextAreaElement extends org.w3c.dom.html.HTMLElement {
                    getDefaultValue(): string
                    setDefaultValue(arg0: java.lang.String | string): void
                    getForm(): org.w3c.dom.html.HTMLFormElement
                    getAccessKey(): string
                    setAccessKey(arg0: java.lang.String | string): void
                    getCols(): int
                    setCols(arg0: int): void
                    getDisabled(): boolean
                    setDisabled(arg0: boolean): void
                    getName(): string
                    setName(arg0: java.lang.String | string): void
                    getReadOnly(): boolean
                    setReadOnly(arg0: boolean): void
                    getRows(): int
                    setRows(arg0: int): void
                    getTabIndex(): int
                    setTabIndex(arg0: int): void
                    getType(): string
                    getValue(): string
                    setValue(arg0: java.lang.String | string): void
                    blur(): void
                    focus(): void
                    select(): void
                }
            }
        }
    }
}