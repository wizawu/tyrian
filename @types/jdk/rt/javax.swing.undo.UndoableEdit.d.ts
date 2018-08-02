declare namespace javax {
    namespace swing {
        namespace undo {
            interface UndoableEdit {
                undo(): void
                canUndo(): boolean
                redo(): void
                canRedo(): boolean
                die(): void
                addEdit(arg0: javax.swing.undo.UndoableEdit): boolean
                replaceEdit(arg0: javax.swing.undo.UndoableEdit): boolean
                isSignificant(): boolean
                getPresentationName(): string
                getUndoPresentationName(): string
                getRedoPresentationName(): string
            }
        }
    }
}