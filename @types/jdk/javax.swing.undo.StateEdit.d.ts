declare namespace javax {
  namespace swing {
    namespace undo {

      class StateEdit extends javax.swing.undo.AbstractUndoableEdit {

        protected static readonly RCSID: java.lang.String
        protected object: javax.swing.undo.StateEditable
        protected preState: java.util.Hashtable<java.lang.Object,java.lang.Object>
        protected postState: java.util.Hashtable<java.lang.Object,java.lang.Object>
        protected undoRedoName: java.lang.String
        public constructor(arg0: javax.swing.undo.StateEditable)
        public constructor(arg0: javax.swing.undo.StateEditable, arg1: java.lang.String)
        protected init(arg0: javax.swing.undo.StateEditable, arg1: java.lang.String): void
        public end(): void
        public undo(): void
        public redo(): void
        public getPresentationName(): java.lang.String
        protected removeRedundantState(): void
      }

    }
  }
}
