declare namespace javax {
    namespace swing {
        namespace text {
interface AbstractDocument$Content {
    createPosition(arg0: int): javax.swing.text.Position
    length(): int
    insertString(arg0: int, arg1: java.lang.String | string): javax.swing.undo.UndoableEdit
    remove(arg0: int, arg1: int): javax.swing.undo.UndoableEdit
    getString(arg0: int, arg1: int): string
    getChars(arg0: int, arg1: int, arg2: javax.swing.text.Segment): void
}

        }
    }
}