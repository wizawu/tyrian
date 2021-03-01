declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSStyleSheet extends org.w3c.dom.stylesheets.StyleSheet {

          getOwnerRule(): org.w3c.dom.css.CSSRule
          getCssRules(): org.w3c.dom.css.CSSRuleList
          insertRule(arg0: java.lang.String, arg1: int): int
          deleteRule(arg0: int): void
        }

      }
    }
  }
}
