declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLSelectElement extends org.w3c.dom.html.HTMLElement {
                    getType(): string
                    getSelectedIndex(): int
                    setSelectedIndex(arg0: int): void
                    getValue(): string
                    setValue(arg0: java.lang.String | string): void
                    getLength(): int
                    getForm(): org.w3c.dom.html.HTMLFormElement
                    getOptions(): org.w3c.dom.html.HTMLCollection
                    getDisabled(): boolean
                    setDisabled(arg0: boolean): void
                    getMultiple(): boolean
                    setMultiple(arg0: boolean): void
                    getName(): string
                    setName(arg0: java.lang.String | string): void
                    getSize(): int
                    setSize(arg0: int): void
                    getTabIndex(): int
                    setTabIndex(arg0: int): void
                    add(arg0: org.w3c.dom.html.HTMLElement, arg1: org.w3c.dom.html.HTMLElement): void
                    remove(arg0: int): void
                    blur(): void
                    focus(): void
                }
            }
        }
    }
}