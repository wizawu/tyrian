declare namespace javax {
    namespace swing {
        namespace text {
class StringContent$RemoveUndo extends javax.swing.undo.AbstractUndoableEdit {
    protected offset: int
    protected length: int
    protected string: string
    protected posRefs: java.util.Vector
    protected constructor(arg0: javax.swing.text.StringContent, arg1: int, arg2: java.lang.String | string)
    public undo(): void
    public redo(): void
    public static class: java.lang.Class<any>
}

        }
    }
}