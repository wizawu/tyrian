declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class HTMLEditorKit$ParserCallback {
                    public static readonly IMPLIED: java.lang.Object
                    public constructor()
                    public flush(): void
                    public handleText(arg0: char[], arg1: int): void
                    public handleComment(arg0: char[], arg1: int): void
                    public handleStartTag(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.MutableAttributeSet, arg2: int): void
                    public handleEndTag(arg0: javax.swing.text.html.HTML$Tag, arg1: int): void
                    public handleSimpleTag(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.MutableAttributeSet, arg2: int): void
                    public handleError(arg0: java.lang.String | string, arg1: int): void
                    public handleEndOfLineString(arg0: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}