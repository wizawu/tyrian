declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        namespace parser {
          class DocumentParser extends javax.swing.text.html.parser.Parser {
            public constructor(arg0: javax.swing.text.html.parser.DTD)
            public parse(
              arg0: java.io.Reader,
              arg1: javax.swing.text.html.HTMLEditorKit$ParserCallback,
              arg2: boolean | java.lang.Boolean
            ): void
            protected handleStartTag(arg0: javax.swing.text.html.parser.TagElement): void
            protected handleComment(arg0: string[] | java.lang.Character[]): void
            protected handleEmptyTag(arg0: javax.swing.text.html.parser.TagElement): void
            protected handleEndTag(arg0: javax.swing.text.html.parser.TagElement): void
            protected handleText(arg0: string[] | java.lang.Character[]): void
            protected handleError(arg0: number | java.lang.Integer, arg1: java.lang.String | string): void
          }
        }
      }
    }
  }
}
