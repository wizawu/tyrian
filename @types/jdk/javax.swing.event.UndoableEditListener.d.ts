declare namespace javax {
  namespace swing {
    namespace event {
      interface UndoableEditListener$$lambda {
        (arg0: javax.swing.event.UndoableEditEvent): void
      }

      interface UndoableEditListener extends java.util.EventListener {
        undoableEditHappened(arg0: javax.swing.event.UndoableEditEvent): void
      }
    }
  }
}
