declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
interface HTMLTableElement extends org.w3c.dom.html.HTMLElement {
    getCaption(): org.w3c.dom.html.HTMLTableCaptionElement
    setCaption(arg0: org.w3c.dom.html.HTMLTableCaptionElement): void
    getTHead(): org.w3c.dom.html.HTMLTableSectionElement
    setTHead(arg0: org.w3c.dom.html.HTMLTableSectionElement): void
    getTFoot(): org.w3c.dom.html.HTMLTableSectionElement
    setTFoot(arg0: org.w3c.dom.html.HTMLTableSectionElement): void
    getRows(): org.w3c.dom.html.HTMLCollection
    getTBodies(): org.w3c.dom.html.HTMLCollection
    getAlign(): string
    setAlign(arg0: java.lang.String | string): void
    getBgColor(): string
    setBgColor(arg0: java.lang.String | string): void
    getBorder(): string
    setBorder(arg0: java.lang.String | string): void
    getCellPadding(): string
    setCellPadding(arg0: java.lang.String | string): void
    getCellSpacing(): string
    setCellSpacing(arg0: java.lang.String | string): void
    getFrame(): string
    setFrame(arg0: java.lang.String | string): void
    getRules(): string
    setRules(arg0: java.lang.String | string): void
    getSummary(): string
    setSummary(arg0: java.lang.String | string): void
    getWidth(): string
    setWidth(arg0: java.lang.String | string): void
    createTHead(): org.w3c.dom.html.HTMLElement
    deleteTHead(): void
    createTFoot(): org.w3c.dom.html.HTMLElement
    deleteTFoot(): void
    createCaption(): org.w3c.dom.html.HTMLElement
    deleteCaption(): void
    insertRow(arg0: int): org.w3c.dom.html.HTMLElement
    deleteRow(arg0: int): void
}

            }
        }
    }
}