declare namespace javax {
  namespace swing {
    namespace text {
      interface AbstractDocument$Content {
        createPosition(arg0: number | java.lang.Integer): javax.swing.text.Position
        length(): number
        insertString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): javax.swing.undo.UndoableEdit
        remove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.undo.UndoableEdit
        getString(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
        getChars(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Segment
        ): void
      }
    }
  }
}
