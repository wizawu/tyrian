declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class HTMLDocument$HTMLReader extends javax.swing.text.html.HTMLEditorKit$ParserCallback {
                    protected parseBuffer: java.util.Vector<javax.swing.text.DefaultStyledDocument$ElementSpec>
                    protected charAttr: javax.swing.text.MutableAttributeSet
                    public constructor(arg0: javax.swing.text.html.HTMLDocument, arg1: int)
                    public constructor(arg0: javax.swing.text.html.HTMLDocument, arg1: int, arg2: int, arg3: int, arg4: javax.swing.text.html.HTML$Tag)
                    public flush(): void
                    public handleText(arg0: char[], arg1: int): void
                    public handleStartTag(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.MutableAttributeSet, arg2: int): void
                    public handleComment(arg0: char[], arg1: int): void
                    public handleEndTag(arg0: javax.swing.text.html.HTML$Tag, arg1: int): void
                    public handleSimpleTag(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.MutableAttributeSet, arg2: int): void
                    public handleEndOfLineString(arg0: java.lang.String | string): void
                    protected registerTag(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.html.HTMLDocument$HTMLReader$TagAction): void
                    protected pushCharacterStyle(): void
                    protected popCharacterStyle(): void
                    protected textAreaContent(arg0: char[]): void
                    protected preContent(arg0: char[]): void
                    protected blockOpen(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.MutableAttributeSet): void
                    protected blockClose(arg0: javax.swing.text.html.HTML$Tag): void
                    protected addContent(arg0: char[], arg1: int, arg2: int): void
                    protected addContent(arg0: char[], arg1: int, arg2: int, arg3: boolean): void
                    protected addSpecialElement(arg0: javax.swing.text.html.HTML$Tag, arg1: javax.swing.text.MutableAttributeSet): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}