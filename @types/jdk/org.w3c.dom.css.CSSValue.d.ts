declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {
        interface CSSValue {
          readonly CSS_INHERIT: short
          readonly CSS_PRIMITIVE_VALUE: short
          readonly CSS_VALUE_LIST: short
          readonly CSS_CUSTOM: short
          getCssText(): java.lang.String
          setCssText(arg0: java.lang.String | string): void
          getCssValueType(): number
        }
      }
    }
  }
}
