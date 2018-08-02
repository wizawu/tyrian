declare namespace javax {
    namespace swing {
        namespace text {
            namespace html {
class HTMLEditorKit$InsertHTMLTextAction extends javax.swing.text.html.HTMLEditorKit$HTMLTextAction {
    protected html: string
    protected parentTag: javax.swing.text.html.HTML$Tag
    protected addTag: javax.swing.text.html.HTML$Tag
    protected alternateParentTag: javax.swing.text.html.HTML$Tag
    protected alternateAddTag: javax.swing.text.html.HTML$Tag
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.swing.text.html.HTML$Tag, arg3: javax.swing.text.html.HTML$Tag)
    public constructor(arg0: java.lang.String | string, arg1: java.lang.String | string, arg2: javax.swing.text.html.HTML$Tag, arg3: javax.swing.text.html.HTML$Tag, arg4: javax.swing.text.html.HTML$Tag, arg5: javax.swing.text.html.HTML$Tag)
    protected insertHTML(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.html.HTMLDocument, arg2: int, arg3: java.lang.String | string, arg4: int, arg5: int, arg6: javax.swing.text.html.HTML$Tag): void
    protected insertAtBoundary(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.html.HTMLDocument, arg2: int, arg3: javax.swing.text.Element, arg4: java.lang.String | string, arg5: javax.swing.text.html.HTML$Tag, arg6: javax.swing.text.html.HTML$Tag): void
    protected insertAtBoundry(arg0: javax.swing.JEditorPane, arg1: javax.swing.text.html.HTMLDocument, arg2: int, arg3: javax.swing.text.Element, arg4: java.lang.String | string, arg5: javax.swing.text.html.HTML$Tag, arg6: javax.swing.text.html.HTML$Tag): void
    public actionPerformed(arg0: java.awt.event.ActionEvent): void
    public static class: java.lang.Class<any>
}

            }
        }
    }
}