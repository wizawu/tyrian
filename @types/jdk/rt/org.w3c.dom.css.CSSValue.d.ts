declare namespace org {
    namespace w3c {
        namespace dom {
            namespace css {
                interface CSSValue {
                    CSS_INHERIT: short
                    CSS_PRIMITIVE_VALUE: short
                    CSS_VALUE_LIST: short
                    CSS_CUSTOM: short
                    getCssText(): string
                    setCssText(arg0: java.lang.String | string): void
                    getCssValueType(): short
                }
            }
        }
    }
}