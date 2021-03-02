declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSValue {
          public static readonly CSS_INHERIT: short
          public static readonly CSS_PRIMITIVE_VALUE: short
          public static readonly CSS_VALUE_LIST: short
          public static readonly CSS_CUSTOM: short
          getCssText(): java.lang.String
          setCssText(arg0: java.lang.String): void
          getCssValueType(): short
        }

      }
    }
  }
}
