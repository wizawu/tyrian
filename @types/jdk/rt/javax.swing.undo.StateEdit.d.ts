declare namespace javax {
    namespace swing {
        namespace undo {
            class StateEdit extends javax.swing.undo.AbstractUndoableEdit {
                protected static readonly RCSID: string
                protected object: javax.swing.undo.StateEditable
                protected preState: java.util.Hashtable<java.lang.Object, java.lang.Object>
                protected postState: java.util.Hashtable<java.lang.Object, java.lang.Object>
                protected undoRedoName: string
                public constructor(arg0: javax.swing.undo.StateEditable)
                public constructor(arg0: javax.swing.undo.StateEditable, arg1: java.lang.String | string)
                protected init(arg0: javax.swing.undo.StateEditable, arg1: java.lang.String | string): void
                public end(): void
                public undo(): void
                public redo(): void
                public getPresentationName(): string
                protected removeRedundantState(): void
                public static class: java.lang.Class<any>
            }
        }
    }
}