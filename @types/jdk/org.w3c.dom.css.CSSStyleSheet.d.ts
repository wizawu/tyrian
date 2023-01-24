declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {
        interface CSSStyleSheet extends org.w3c.dom.stylesheets.StyleSheet {
          getOwnerRule(): org.w3c.dom.css.CSSRule
          getCssRules(): org.w3c.dom.css.CSSRuleList
          insertRule(arg0: java.lang.String | string, arg1: number | java.lang.Integer): number
          deleteRule(arg0: number | java.lang.Integer): void
        }
      }
    }
  }
}
