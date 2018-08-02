declare namespace javax {
    namespace swing {
        namespace undo {
            class UndoManager extends javax.swing.undo.CompoundEdit implements javax.swing.event.UndoableEditListener {
                public constructor()
                public getLimit(): int
                public discardAllEdits(): void
                protected trimForLimit(): void
                protected trimEdits(arg0: int, arg1: int): void
                public setLimit(arg0: int): void
                protected editToBeUndone(): javax.swing.undo.UndoableEdit
                protected editToBeRedone(): javax.swing.undo.UndoableEdit
                protected undoTo(arg0: javax.swing.undo.UndoableEdit): void
                protected redoTo(arg0: javax.swing.undo.UndoableEdit): void
                public undoOrRedo(): void
                public canUndoOrRedo(): boolean
                public undo(): void
                public canUndo(): boolean
                public redo(): void
                public canRedo(): boolean
                public addEdit(arg0: javax.swing.undo.UndoableEdit): boolean
                public end(): void
                public getUndoOrRedoPresentationName(): string
                public getUndoPresentationName(): string
                public getRedoPresentationName(): string
                public undoableEditHappened(arg0: javax.swing.event.UndoableEditEvent): void
                public toString(): string
                public static class: java.lang.Class<any>
            }
        }
    }
}