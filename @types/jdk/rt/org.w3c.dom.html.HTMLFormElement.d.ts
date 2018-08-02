declare namespace org {
    namespace w3c {
        namespace dom {
            namespace html {
                interface HTMLFormElement extends org.w3c.dom.html.HTMLElement {
                    getElements(): org.w3c.dom.html.HTMLCollection
                    getLength(): int
                    getName(): string
                    setName(arg0: java.lang.String | string): void
                    getAcceptCharset(): string
                    setAcceptCharset(arg0: java.lang.String | string): void
                    getAction(): string
                    setAction(arg0: java.lang.String | string): void
                    getEnctype(): string
                    setEnctype(arg0: java.lang.String | string): void
                    getMethod(): string
                    setMethod(arg0: java.lang.String | string): void
                    getTarget(): string
                    setTarget(arg0: java.lang.String | string): void
                    submit(): void
                    reset(): void
                }
            }
        }
    }
}