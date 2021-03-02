declare namespace org {
  namespace w3c {
    namespace dom {
      namespace html {

        interface HTMLFrameElement extends org.w3c.dom.html.HTMLElement {
          getFrameBorder(): java.lang.String
          setFrameBorder(arg0: java.lang.String | string): void
          getLongDesc(): java.lang.String
          setLongDesc(arg0: java.lang.String | string): void
          getMarginHeight(): java.lang.String
          setMarginHeight(arg0: java.lang.String | string): void
          getMarginWidth(): java.lang.String
          setMarginWidth(arg0: java.lang.String | string): void
          getName(): java.lang.String
          setName(arg0: java.lang.String | string): void
          getNoResize(): boolean
          setNoResize(arg0: boolean | java.lang.Boolean): void
          getScrolling(): java.lang.String
          setScrolling(arg0: java.lang.String | string): void
          getSrc(): java.lang.String
          setSrc(arg0: java.lang.String | string): void
          getContentDocument(): org.w3c.dom.Document
        }

      }
    }
  }
}
