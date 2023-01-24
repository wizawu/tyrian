declare namespace javax {
  namespace swing {
    interface CellEditor {
      getCellEditorValue(): java.lang.Object
      isCellEditable(arg0: java.util.EventObject): boolean
      shouldSelectCell(arg0: java.util.EventObject): boolean
      stopCellEditing(): boolean
      cancelCellEditing(): void
      addCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
      removeCellEditorListener(arg0: javax.swing.event.CellEditorListener): void
    }
  }
}
