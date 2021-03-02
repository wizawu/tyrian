declare namespace javax {
  namespace swing {
    namespace event {

      interface TableColumnModelListener extends java.util.EventListener {
        columnAdded(arg0: javax.swing.event.TableColumnModelEvent): void
        columnRemoved(arg0: javax.swing.event.TableColumnModelEvent): void
        columnMoved(arg0: javax.swing.event.TableColumnModelEvent): void
        columnMarginChanged(arg0: javax.swing.event.ChangeEvent): void
        columnSelectionChanged(arg0: javax.swing.event.ListSelectionEvent): void
      }

    }
  }
}
