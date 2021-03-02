declare namespace javax {
  namespace swing {
    namespace text {

      class AbstractDocument$ElementEdit extends javax.swing.undo.AbstractUndoableEdit implements javax.swing.event.DocumentEvent$ElementChange {
        public constructor(arg0: javax.swing.text.Element, arg1: number | java.lang.Integer, arg2: javax.swing.text.Element[], arg3: javax.swing.text.Element[])
        public getElement(): javax.swing.text.Element
        public getIndex(): number
        public getChildrenRemoved(): javax.swing.text.Element[]
        public getChildrenAdded(): javax.swing.text.Element[]
        public redo(): void
        public undo(): void
      }

    }
  }
}
