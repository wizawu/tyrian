declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSStyleRule extends org.w3c.dom.css.CSSRule {
          getSelectorText(): java.lang.String
          setSelectorText(arg0: java.lang.String): void
          getStyle(): org.w3c.dom.css.CSSStyleDeclaration
        }

      }
    }
  }
}
