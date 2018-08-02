declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
interface HTMLInputElement extends org.w3c.dom.html.HTMLElement {
    getDefaultValue(): string
    setDefaultValue(arg0: java.lang.String | string): void
    getDefaultChecked(): boolean
    setDefaultChecked(arg0: boolean): void
    getForm(): org.w3c.dom.html.HTMLFormElement
    getAccept(): string
    setAccept(arg0: java.lang.String | string): void
    getAccessKey(): string
    setAccessKey(arg0: java.lang.String | string): void
    getAlign(): string
    setAlign(arg0: java.lang.String | string): void
    getAlt(): string
    setAlt(arg0: java.lang.String | string): void
    getChecked(): boolean
    setChecked(arg0: boolean): void
    getDisabled(): boolean
    setDisabled(arg0: boolean): void
    getMaxLength(): int
    setMaxLength(arg0: int): void
    getName(): string
    setName(arg0: java.lang.String | string): void
    getReadOnly(): boolean
    setReadOnly(arg0: boolean): void
    getSize(): string
    setSize(arg0: java.lang.String | string): void
    getSrc(): string
    setSrc(arg0: java.lang.String | string): void
    getTabIndex(): int
    setTabIndex(arg0: int): void
    getType(): string
    getUseMap(): string
    setUseMap(arg0: java.lang.String | string): void
    getValue(): string
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