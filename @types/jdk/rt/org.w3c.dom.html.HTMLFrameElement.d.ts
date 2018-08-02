declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLFrameElement extends org.w3c.dom.html.HTMLElement {
                    getFrameBorder(): string
                    setFrameBorder(arg0: java.lang.String | string): void
                    getLongDesc(): string
                    setLongDesc(arg0: java.lang.String | string): void
                    getMarginHeight(): string
                    setMarginHeight(arg0: java.lang.String | string): void
                    getMarginWidth(): string
                    setMarginWidth(arg0: java.lang.String | string): void
                    getName(): string
                    setName(arg0: java.lang.String | string): void
                    getNoResize(): boolean
                    setNoResize(arg0: boolean): void
                    getScrolling(): string
                    setScrolling(arg0: java.lang.String | string): void
                    getSrc(): string
                    setSrc(arg0: java.lang.String | string): void
                    getContentDocument(): org.w3c.dom.Document
                }
            }
        }
    }
}