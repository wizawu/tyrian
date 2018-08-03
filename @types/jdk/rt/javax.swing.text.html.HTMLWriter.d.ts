declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class HTMLWriter extends javax.swing.text.AbstractWriter {
                    public constructor(arg0: java.io.Writer, arg1: javax.swing.text.html.HTMLDocument)
                    public constructor(arg0: java.io.Writer, arg1: javax.swing.text.html.HTMLDocument, arg2: int, arg3: int)
                    public write(): void
                    protected writeAttributes(arg0: javax.swing.text.AttributeSet): void
                    protected emptyTag(arg0: javax.swing.text.Element): void
                    protected isBlockTag(arg0: javax.swing.text.AttributeSet): boolean
                    protected startTag(arg0: javax.swing.text.Element): void
                    protected textAreaContent(arg0: javax.swing.text.AttributeSet): void
                    protected text(arg0: javax.swing.text.Element): void
                    protected selectContent(arg0: javax.swing.text.AttributeSet): void
                    protected writeOption(arg0: javax.swing.text.html.Option): void
                    protected endTag(arg0: javax.swing.text.Element): void
                    protected comment(arg0: javax.swing.text.Element): void
                    protected synthesizedElement(arg0: javax.swing.text.Element): boolean
                    protected matchNameAttribute(arg0: javax.swing.text.AttributeSet, arg1: javax.swing.text.html.HTML$Tag): boolean
                    protected writeEmbeddedTags(arg0: javax.swing.text.AttributeSet): void
                    protected closeOutUnwantedEmbeddedTags(arg0: javax.swing.text.AttributeSet): void
                    protected writeLineSeparator(): void
                    protected output(arg0: char[], arg1: int, arg2: int): void
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}