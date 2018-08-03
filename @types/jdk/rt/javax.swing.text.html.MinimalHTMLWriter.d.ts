declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class MinimalHTMLWriter extends javax.swing.text.AbstractWriter {
                    public constructor(arg0: java.io.Writer, arg1: javax.swing.text.StyledDocument)
                    public constructor(arg0: java.io.Writer, arg1: javax.swing.text.StyledDocument, arg2: int, arg3: int)
                    public write(): void
                    protected writeAttributes(arg0: javax.swing.text.AttributeSet): void
                    protected text(arg0: javax.swing.text.Element): void
                    protected writeStartTag(arg0: java.lang.String | string): void
                    protected writeEndTag(arg0: java.lang.String | string): void
                    protected writeHeader(): void
                    protected writeStyles(): void
                    protected writeBody(): void
                    protected writeEndParagraph(): void
                    protected writeStartParagraph(arg0: javax.swing.text.Element): void
                    protected writeLeaf(arg0: javax.swing.text.Element): void
                    protected writeImage(arg0: javax.swing.text.Element): void
                    protected writeComponent(arg0: javax.swing.text.Element): void
                    protected isText(arg0: javax.swing.text.Element): boolean
                    protected writeContent(arg0: javax.swing.text.Element, arg1: boolean): void
                    protected writeHTMLTags(arg0: javax.swing.text.AttributeSet): void
                    protected writeNonHTMLAttributes(arg0: javax.swing.text.AttributeSet): void
                    protected inFontTag(): boolean
                    protected endFontTag(): void
                    protected startFontTag(arg0: java.lang.String | string): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}