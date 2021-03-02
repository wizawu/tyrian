declare namespace javax {
  namespace swing {
    namespace text {

      class StringContent implements javax.swing.text.AbstractDocument$Content, java.io.Serializable {
        marks: java.util.Vector<javax.swing.text.StringContent$PosRec>
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        public length(): number
        public insertString(arg0: number | java.lang.Integer, arg1: java.lang.String | string): javax.swing.undo.UndoableEdit
        public remove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.undo.UndoableEdit
        public getString(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
        public getChars(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: javax.swing.text.Segment): void
        public createPosition(arg0: number | java.lang.Integer): javax.swing.text.Position
        replace(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer, arg2: char[], arg3: number | java.lang.Integer, arg4: number | java.lang.Integer): void
        resize(arg0: number | java.lang.Integer): void
        updateMarksForInsert(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        updateMarksForRemove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): void
        protected getPositionsInRange(arg0: java.util.Vector, arg1: number | java.lang.Integer, arg2: number | java.lang.Integer): java.util.Vector
        protected updateUndoPositions(arg0: java.util.Vector): void
      }

    }
  }
}
