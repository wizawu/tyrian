declare namespace javax {
    namespace swing {
        namespace undo {
class AbstractUndoableEdit implements javax.swing.undo.UndoableEdit , java.io.Serializable {
    protected static UndoName: string
    protected static RedoName: string
    public constructor()
    public die(): void
    public undo(): void
    public canUndo(): boolean
    public redo(): void
    public canRedo(): boolean
    public addEdit(arg0: javax.swing.undo.UndoableEdit): boolean
    public replaceEdit(arg0: javax.swing.undo.UndoableEdit): boolean
    public isSignificant(): boolean
    public getPresentationName(): string
    public getUndoPresentationName(): string
    public getRedoPresentationName(): string
    public toString(): string
    public static class: java.lang.Class<any>
}

        }
    }
}