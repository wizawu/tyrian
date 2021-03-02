declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSMediaRule extends org.w3c.dom.css.CSSRule {
          getMedia(): org.w3c.dom.stylesheets.MediaList
          getCssRules(): org.w3c.dom.css.CSSRuleList
          insertRule(arg0: java.lang.String, arg1: int): int
          deleteRule(arg0: int): void
        }

      }
    }
  }
}
