declare namespace javax {
    namespace swing {
        namespace text {
            class AbstractDocument$DefaultDocumentEvent extends javax.swing.undo.CompoundEdit implements javax.swing.event.DocumentEvent {
                public constructor(arg0: javax.swing.text.AbstractDocument, arg1: int, arg2: int, arg3: javax.swing.event.DocumentEvent$EventType)
                public toString(): string
                public addEdit(arg0: javax.swing.undo.UndoableEdit): boolean
                public redo(): void
                public undo(): void
                public isSignificant(): boolean
                public getPresentationName(): string
                public getUndoPresentationName(): string
                public getRedoPresentationName(): string
                public getType(): javax.swing.event.DocumentEvent$EventType
                public getOffset(): int
                public getLength(): int
                public getDocument(): javax.swing.text.Document
                public getChange(arg0: javax.swing.text.Element): javax.swing.event.DocumentEvent$ElementChange
                public static class: java.lang.Class<any>
            }
        }
    }
}