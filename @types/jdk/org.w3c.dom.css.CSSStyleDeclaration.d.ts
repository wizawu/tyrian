declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSStyleDeclaration {
          getCssText(): java.lang.String
          setCssText(arg0: java.lang.String | string): void
          getPropertyValue(arg0: java.lang.String | string): java.lang.String
          getPropertyCSSValue(arg0: java.lang.String | string): org.w3c.dom.css.CSSValue
          removeProperty(arg0: java.lang.String | string): java.lang.String
          getPropertyPriority(arg0: java.lang.String | string): java.lang.String
          setProperty(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: java.lang.String | string): void
          getLength(): number
          item(arg0: number | java.lang.Integer): java.lang.String
          getParentRule(): org.w3c.dom.css.CSSRule
        }

      }
    }
  }
}
