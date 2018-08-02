declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLScriptElement extends org.w3c.dom.html.HTMLElement {
                    getText(): string
                    setText(arg0: java.lang.String | string): void
                    getHtmlFor(): string
                    setHtmlFor(arg0: java.lang.String | string): void
                    getEvent(): string
                    setEvent(arg0: java.lang.String | string): void
                    getCharset(): string
                    setCharset(arg0: java.lang.String | string): void
                    getDefer(): boolean
                    setDefer(arg0: boolean): void
                    getSrc(): string
                    setSrc(arg0: java.lang.String | string): void
                    getType(): string
                    setType(arg0: java.lang.String | string): void
                }
            }
        }
    }
}