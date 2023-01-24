declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {
        interface CSSRule {
          readonly UNKNOWN_RULE: short
          readonly STYLE_RULE: short
          readonly CHARSET_RULE: short
          readonly IMPORT_RULE: short
          readonly MEDIA_RULE: short
          readonly FONT_FACE_RULE: short
          readonly PAGE_RULE: short
          getType(): number
          getCssText(): java.lang.String
          setCssText(arg0: java.lang.String | string): void
          getParentStyleSheet(): org.w3c.dom.css.CSSStyleSheet
          getParentRule(): org.w3c.dom.css.CSSRule
        }
      }
    }
  }
}
