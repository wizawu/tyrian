declare namespace javax {
    namespace swing {
        namespace text {
class DefaultStyledDocument$StyleChangeUndoableEdit extends javax.swing.undo.AbstractUndoableEdit {
    protected element: javax.swing.text.AbstractDocument$AbstractElement
    protected newStyle: javax.swing.text.Style
    protected oldStyle: javax.swing.text.AttributeSet
    public constructor(arg0: javax.swing.text.AbstractDocument$AbstractElement, arg1: javax.swing.text.Style)
    public redo(): void
    public undo(): void
    public static class: java.lang.Class<any>
}

        }
    }
}