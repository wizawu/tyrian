declare namespace javax {
  namespace swing {
    namespace text {
      class GapContent
        extends javax.swing.text.GapVector
        implements javax.swing.text.AbstractDocument$Content, java.io.Serializable
      {
        static readonly GROWTH_SIZE: int
        public constructor()
        public constructor(arg0: number | java.lang.Integer)
        protected allocateArray(arg0: number | java.lang.Integer): java.lang.Object
        protected getArrayLength(): number
        resize(arg0: number | java.lang.Integer): void
        public length(): number
        public insertString(
          arg0: number | java.lang.Integer,
          arg1: java.lang.String | string
        ): javax.swing.undo.UndoableEdit
        public remove(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): javax.swing.undo.UndoableEdit
        public getString(arg0: number | java.lang.Integer, arg1: number | java.lang.Integer): java.lang.String
        public getChars(
          arg0: number | java.lang.Integer,
          arg1: number | java.lang.Integer,
          arg2: javax.swing.text.Segment
        ): void
        public createPosition(arg0: number | java.lang.Integer): javax.swing.text.Position
        protected shiftEnd(arg0: number | java.lang.Integer): void
        getNewArraySize(arg0: number | java.lang.Integer): number
        protected shiftGap(arg0: number | java.lang.Integer): void
        protected resetMarksAtZero(): void
        protected shiftGapStartDown(arg0: number | java.lang.Integer): void
        protected shiftGapEndUp(arg0: number | java.lang.Integer): void
        compare(arg0: javax.swing.text.GapContent$MarkData, arg1: javax.swing.text.GapContent$MarkData): number
        findMarkAdjustIndex(arg0: number | java.lang.Integer): number
        findSortIndex(arg0: javax.swing.text.GapContent$MarkData): number
        removeUnusedMarks(): void
        protected getPositionsInRange(
          arg0: java.util.Vector,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): java.util.Vector
        protected updateUndoPositions(
          arg0: java.util.Vector,
          arg1: number | java.lang.Integer,
          arg2: number | java.lang.Integer
        ): void
      }
    }
  }
}
