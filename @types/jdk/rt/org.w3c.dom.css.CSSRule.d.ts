declare namespace org {
    namespace w3c {
        namespace dom {
            namespace css {
                interface CSSRule {
                    UNKNOWN_RULE: short
                    STYLE_RULE: short
                    CHARSET_RULE: short
                    IMPORT_RULE: short
                    MEDIA_RULE: short
                    FONT_FACE_RULE: short
                    PAGE_RULE: short
                    getType(): short
                    getCssText(): string
                    setCssText(arg0: java.lang.String | string): void
                    getParentStyleSheet(): org.w3c.dom.css.CSSStyleSheet
                    getParentRule(): org.w3c.dom.css.CSSRule
                }
            }
        }
    }
}