declare namespace javax {
    namespace swing {
        namespace text {
            class GapContent extends javax.swing.text.GapVector implements javax.swing.text.AbstractDocument$Content , java.io.Serializable {
                public constructor()
                public constructor(arg0: int)
                protected allocateArray(arg0: int): java.lang.Object
                protected getArrayLength(): int
                public length(): int
                public insertString(arg0: int, arg1: java.lang.String | string): javax.swing.undo.UndoableEdit
                public remove(arg0: int, arg1: int): javax.swing.undo.UndoableEdit
                public getString(arg0: int, arg1: int): string
                public getChars(arg0: int, arg1: int, arg2: javax.swing.text.Segment): void
                public createPosition(arg0: int): javax.swing.text.Position
                protected shiftEnd(arg0: int): void
                protected shiftGap(arg0: int): void
                protected resetMarksAtZero(): void
                protected shiftGapStartDown(arg0: int): void
                protected shiftGapEndUp(arg0: int): void
                protected getPositionsInRange(arg0: java.util.Vector, arg1: int, arg2: int): java.util.Vector
                protected updateUndoPositions(arg0: java.util.Vector, arg1: int, arg2: int): void
                public static class: java.lang.Class<any>
            }
        }
    }
}