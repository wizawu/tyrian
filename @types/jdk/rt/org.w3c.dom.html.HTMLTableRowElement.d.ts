declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLTableRowElement extends org.w3c.dom.html.HTMLElement {
                    getRowIndex(): int
                    getSectionRowIndex(): int
                    getCells(): org.w3c.dom.html.HTMLCollection
                    getAlign(): string
                    setAlign(arg0: java.lang.String | string): void
                    getBgColor(): string
                    setBgColor(arg0: java.lang.String | string): void
                    getCh(): string
                    setCh(arg0: java.lang.String | string): void
                    getChOff(): string
                    setChOff(arg0: java.lang.String | string): void
                    getVAlign(): string
                    setVAlign(arg0: java.lang.String | string): void
                    insertCell(arg0: int): org.w3c.dom.html.HTMLElement
                    deleteCell(arg0: int): void
                }
            }
        }
    }
}