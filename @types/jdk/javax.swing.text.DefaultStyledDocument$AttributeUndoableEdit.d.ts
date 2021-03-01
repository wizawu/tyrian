declare namespace javax {
  namespace swing {
    namespace text {

      class DefaultStyledDocument$AttributeUndoableEdit extends javax.swing.undo.AbstractUndoableEdit {

        protected newAttributes: javax.swing.text.AttributeSet
        protected copy: javax.swing.text.AttributeSet
        protected isReplacing: boolean
        protected element: javax.swing.text.Element
        public constructor(arg0: javax.swing.text.Element, arg1: javax.swing.text.AttributeSet, arg2: boolean)
        public redo(): void
        public undo(): void
      }

    }
  }
}
