declare namespace javax {
  namespace swing {
    namespace text {
      namespace html {
        class HTMLEditorKit$ParserCallback {
          public static readonly IMPLIED: java.lang.Object
          public constructor()
          public flush(): void
          public handleText(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer): void
          public handleComment(arg0: string[] | java.lang.Character[], arg1: number | java.lang.Integer): void
          public handleStartTag(
            arg0: javax.swing.text.html.HTML$Tag,
            arg1: javax.swing.text.MutableAttributeSet,
            arg2: number | java.lang.Integer
          ): void
          public handleEndTag(arg0: javax.swing.text.html.HTML$Tag, arg1: number | java.lang.Integer): void
          public handleSimpleTag(
            arg0: javax.swing.text.html.HTML$Tag,
            arg1: javax.swing.text.MutableAttributeSet,
            arg2: number | java.lang.Integer
          ): void
          public handleError(arg0: java.lang.String | string, arg1: number | java.lang.Integer): void
          public handleEndOfLineString(arg0: java.lang.String | string): void
        }
      }
    }
  }
}
