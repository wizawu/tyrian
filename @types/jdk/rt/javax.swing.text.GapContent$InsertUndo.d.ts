declare namespace javax {
    namespace swing {
        namespace text {
            class GapContent$InsertUndo extends javax.swing.undo.AbstractUndoableEdit {
                protected offset: int
                protected length: int
                protected string: string
                protected posRefs: java.util.Vector
                protected constructor(arg0: javax.swing.text.GapContent, arg1: int, arg2: int)
                public undo(): void
                public redo(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}