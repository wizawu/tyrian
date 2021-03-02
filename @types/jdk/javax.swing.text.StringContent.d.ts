declare namespace javax {
  namespace swing {
    namespace text {

      class StringContent implements javax.swing.text.AbstractDocument$Content, java.io.Serializable {
        marks: java.util.Vector<javax.swing.text.StringContent$PosRec>
        public constructor()
        public constructor(arg0: int)
        public length(): int
        public insertString(arg0: int, arg1: java.lang.String): javax.swing.undo.UndoableEdit
        public remove(arg0: int, arg1: int): javax.swing.undo.UndoableEdit
        public getString(arg0: int, arg1: int): java.lang.String
        public getChars(arg0: int, arg1: int, arg2: javax.swing.text.Segment): void
        public createPosition(arg0: int): javax.swing.text.Position
        replace(arg0: int, arg1: int, arg2: char[], arg3: int, arg4: int): void
        resize(arg0: int): void
        updateMarksForInsert(arg0: int, arg1: int): void
        updateMarksForRemove(arg0: int, arg1: int): void
        protected getPositionsInRange(arg0: java.util.Vector, arg1: int, arg2: int): java.util.Vector
        protected updateUndoPositions(arg0: java.util.Vector): void
      }

    }
  }
}
