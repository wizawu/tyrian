declare namespace javax {
  namespace swing {
    abstract class AbstractCellEditor implements javax.swing.CellEditor, java.io.Serializable {
      protected listenerList: javax.swing.event.EventListenerList
      protected changeEvent: javax.swing.event.ChangeEvent
      public constructor()
      public isCellEditable(arg0: java.util.EventObject): boolean
      public shouldSelectCell(arg0: java.util.EventObject): boolean
      public stopCellEditing(): boolean
      public cancelCellEditing(): void
      public addCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
      public removeCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
      public getCellEditorListeners(): javax.swing.event.CellEditorListener[]
      protected fireEditingStopped(): void
      protected fireEditingCanceled(): void
    }
  }
}
