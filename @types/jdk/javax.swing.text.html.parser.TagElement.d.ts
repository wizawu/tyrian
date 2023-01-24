declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {
          class TagElement {
            elem: javax.swing.text.html.parser.Element
            htmlTag: javax.swing.text.html.HTML$Tag
            insertedByErrorRecovery: boolean
            public constructor(arg0: javax.swing.text.html.parser.Element)
            public constructor(arg0: javax.swing.text.html.parser.Element, arg1: boolean | java.lang.Boolean)
            public breaksFlow(): boolean
            public isPreformatted(): boolean
            public getElement(): javax.swing.text.html.parser.Element
            public getHTMLTag(): javax.swing.text.html.HTML$Tag
            public fictional(): boolean
          }
        }
      }
    }
  }
}
