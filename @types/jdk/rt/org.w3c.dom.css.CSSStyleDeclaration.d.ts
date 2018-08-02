declare namespace org {
    namespace w3c {
        namespace dom {
            namespace css {
interface CSSStyleDeclaration {
    getCssText(): string
    setCssText(arg0: java.lang.String | string): void
    getPropertyValue(arg0: java.lang.String | string): string
    getPropertyCSSValue(arg0: java.lang.String | string): org.w3c.dom.css.CSSValue
    removeProperty(arg0: java.lang.String | string): string
    getPropertyPriority(arg0: java.lang.String | string): string
    setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
    getLength(): int
    item(arg0: int): string
    getParentRule(): org.w3c.dom.css.CSSRule
}

            }
        }
    }
}