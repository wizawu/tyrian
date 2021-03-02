declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSRule {
          public static readonly UNKNOWN_RULE: short
          public static readonly STYLE_RULE: short
          public static readonly CHARSET_RULE: short
          public static readonly IMPORT_RULE: short
          public static readonly MEDIA_RULE: short
          public static readonly FONT_FACE_RULE: short
          public static readonly PAGE_RULE: short
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
