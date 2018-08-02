declare namespace org {
    namespace w3c {
        namespace dom {
            namespace css {
                interface CSSValueList extends org.w3c.dom.css.CSSValue {
                    getLength(): int
                    item(arg0: int): org.w3c.dom.css.CSSValue
                }
            }
        }
    }
}