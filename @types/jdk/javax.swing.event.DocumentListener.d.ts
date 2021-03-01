declare namespace javax {
  namespace swing {
    namespace event {

      interface DocumentListener extends java.util.EventListener {

        insertUpdate(arg0: javax.swing.event.DocumentEvent): void
        removeUpdate(arg0: javax.swing.event.DocumentEvent): void
        changedUpdate(arg0: javax.swing.event.DocumentEvent): void
      }

    }
  }
}
