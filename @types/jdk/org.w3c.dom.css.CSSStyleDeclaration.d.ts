declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSStyleDeclaration {
          getCssText(): java.lang.String
          setCssText(arg0: java.lang.String): void
          getPropertyValue(arg0: java.lang.String): java.lang.String
          getPropertyCSSValue(arg0: java.lang.String): org.w3c.dom.css.CSSValue
          removeProperty(arg0: java.lang.String): java.lang.String
          getPropertyPriority(arg0: java.lang.String): java.lang.String
          setProperty(arg0: java.lang.String, arg1: java.lang.String, arg2: java.lang.String): void
          getLength(): int
          item(arg0: int): java.lang.String
          getParentRule(): org.w3c.dom.css.CSSRule
        }

      }
    }
  }
}
