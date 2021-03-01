declare namespace org {
  namespace w3c {
    namespace dom {
      namespace css {

        interface CSSImportRule extends org.w3c.dom.css.CSSRule {

          getHref(): java.lang.String
          getMedia(): org.w3c.dom.stylesheets.MediaList
          getStyleSheet(): org.w3c.dom.css.CSSStyleSheet
        }

      }
    }
  }
}
