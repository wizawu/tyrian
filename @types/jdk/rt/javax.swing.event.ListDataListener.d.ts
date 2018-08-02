declare namespace javax {
    namespace swing {
        namespace event {
            interface ListDataListener extends java.util.EventListener {
                intervalAdded(arg0: javax.swing.event.ListDataEvent): void
                intervalRemoved(arg0: javax.swing.event.ListDataEvent): void
                contentsChanged(arg0: javax.swing.event.ListDataEvent): void
            }
        }
    }
}