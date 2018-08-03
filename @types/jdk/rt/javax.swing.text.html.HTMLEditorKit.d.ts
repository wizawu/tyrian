declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
                class HTMLEditorKit extends javax.swing.text.StyledEditorKit implements javax.accessibility.Accessible {
                    public static DEFAULT_CSS: string
                    public static BOLD_ACTION: string
                    public static ITALIC_ACTION: string
                    public static PARA_INDENT_LEFT: string
                    public static PARA_INDENT_RIGHT: string
                    public static FONT_CHANGE_BIGGER: string
                    public static FONT_CHANGE_SMALLER: string
                    public static COLOR_ACTION: string
                    public static LOGICAL_STYLE_ACTION: string
                    public static IMG_ALIGN_TOP: string
                    public static IMG_ALIGN_MIDDLE: string
                    public static IMG_ALIGN_BOTTOM: string
                    public static IMG_BORDER: string
                    public constructor()
                    public getContentType(): string
                    public getViewFactory(): javax.swing.text.ViewFactory
                    public createDefaultDocument(): javax.swing.text.Document
                    public read(arg0: java.io.Reader, arg1: javax.swing.text.Document, arg2: int): void
                    public insertHTML(arg0: javax.swing.text.html.HTMLDocument, arg1: int, arg2: java.lang.String | string, arg3: int, arg4: int, arg5: javax.swing.text.html.HTML$Tag): void
                    public write(arg0: java.io.Writer, arg1: javax.swing.text.Document, arg2: int, arg3: int): void
                    public install(arg0: javax.swing.JEditorPane): void
                    public deinstall(arg0: javax.swing.JEditorPane): void
                    public setStyleSheet(arg0: javax.swing.text.html.StyleSheet): void
                    public getStyleSheet(): javax.swing.text.html.StyleSheet
                    public getActions(): javax.swing.Action[]
                    protected createInputAttributes(arg0: javax.swing.text.Element, arg1: javax.swing.text.MutableAttributeSet): void
                    public getInputAttributes(): javax.swing.text.MutableAttributeSet
                    public setDefaultCursor(arg0: java.awt.Cursor): void
                    public getDefaultCursor(): java.awt.Cursor
                    public setLinkCursor(arg0: java.awt.Cursor): void
                    public getLinkCursor(): java.awt.Cursor
                    public isAutoFormSubmission(): boolean
                    public setAutoFormSubmission(arg0: boolean): void
                    public clone(): java.lang.Object
                    protected getParser(): javax.swing.text.html.HTMLEditorKit$Parser
                    public getAccessibleContext(): javax.accessibility.AccessibleContext
                    public static class: java.lang.Class<any>
                }
            }
        }
    }
}