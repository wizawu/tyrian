declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {
        interface HTMLScriptElement extends org.w3c.dom.html.HTMLElement {
          getText(): java.lang.String
          setText(arg0: java.lang.String | string): void
          getHtmlFor(): java.lang.String
          setHtmlFor(arg0: java.lang.String | string): void
          getEvent(): java.lang.String
          setEvent(arg0: java.lang.String | string): void
          getCharset(): java.lang.String
          setCharset(arg0: java.lang.String | string): void
          getDefer(): boolean
          setDefer(arg0: boolean | java.lang.Boolean): void
          getSrc(): java.lang.String
          setSrc(arg0: java.lang.String | string): void
          getType(): java.lang.String
          setType(arg0: java.lang.String | string): void
        }
      }
    }
  }
}
