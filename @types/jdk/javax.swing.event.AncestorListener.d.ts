declare namespace javax {
  namespace swing {
    namespace event {

      interface AncestorListener extends java.util.EventListener {

        ancestorAdded(arg0: javax.swing.event.AncestorEvent): void
        ancestorRemoved(arg0: javax.swing.event.AncestorEvent): void
        ancestorMoved(arg0: javax.swing.event.AncestorEvent): void
      }

    }
  }
}
